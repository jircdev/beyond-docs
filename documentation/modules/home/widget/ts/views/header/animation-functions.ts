export function SVGEventsManager(target) {
    const svg = target.querySelector('svg');
    const {x, y} = svg.getBoundingClientRect();
    const {clientWidth} = svg;

    const middleX = (clientWidth / 2) + x;

    let originalMouseX = 0;
    let originalMouseY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    this.onMouseMove = event => {
        const {pageY, pageX} = event;
        const yDirection = pageY > originalMouseY ? 'bottom' : (originalMouseY === pageY) ? 'same' : 'top';
        const xDirection = pageX > originalMouseX ? 'right' : (originalMouseX === pageX) ? 'same' : 'left';

        originalMouseX = pageX;
        originalMouseY = pageY;

        const adjacentLeg = pageX - middleX;
        const oppositeLeg = pageY - y;
        const tan = oppositeLeg / adjacentLeg;
        const atan = Math.atan(tan) * (180 / Math.PI);


        const xQuadrant = adjacentLeg > 0 ? 1 : 2;
        const yQuadrant = oppositeLeg > 0 ? 2 : 1;

        const quadrants = [
            {x: 2, y: 1, method: () => atan - 360},
            {x: 2, y: 1, method: () => -90 - oppositeLeg},
            {x: 1, y: 1, method: () => atan - 360},
            {x: 2, y: 2, method: () => -90 + 2 * atan},
            {x: 1, y: 2, method: () => atan}
        ];
        const index = (quadrants.findIndex(item => item.x === xQuadrant && item.y === yQuadrant));

        if (xDirection !== 'same') {
            mouseCurrentX += xDirection === 'left' ? -5 : 5;
            mouseCurrentX = mouseCurrentX > 70 ? 70 : mouseCurrentX < -70 ? -70 : mouseCurrentX;
            svg.style.left = `${mouseCurrentX}px`;
        }

        if (yDirection !== 'same') {
            mouseCurrentY += yDirection === 'top' ? -5 : 5;
            mouseCurrentY = mouseCurrentY > 70 ? 70 : mouseCurrentY < -70 ? -70 : mouseCurrentY;
            svg.style.top = `${mouseCurrentY}px`;
        }

        svg.style.transform = `rotate(${quadrants[index].method()}deg)`;

    };
    this.onMouseLeave = event => {

        const svg = target.querySelector('svg');
        if (!svg) return;
        const getAngle = value => {
            if (!value) {
                console.log('there is no value');
                return;
            }
            let values = value.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            let a = values[0];
            let b = values[1];
            return Math.round(Math.atan2(b, a) * (180 / Math.PI));
        }
        let currentAngle = getAngle(window.getComputedStyle(svg, null).getPropertyValue('transform'));
        if (!currentAngle) {
            return;
        }
        const rollback = (position, current) => {
            const interval = window.setInterval(() => {
                current = current > 0 ? current - 1 : current + 1;
                svg.style[position] = current;
                if (current === 0) clearInterval(interval);
            }, 0);

        }
        rollback('left', parseInt(svg.style.left.replace('px', '')));
        rollback('top', parseInt(svg.style.top.replace('px', '')));

        const interval = window.setInterval(() => {

            currentAngle = currentAngle > 0 ? currentAngle - 1 : currentAngle + 1;
            svg.style.transform = `rotate(${currentAngle}deg)`;
            if (currentAngle === 0) {
                clearInterval(interval);
                return;
            }

        }, 0);


    }

    this.addEvents = () => {
        target.addEventListener('mousemove', this.onMouseMove)
        target.addEventListener('mouseleave', this.onMouseLeave)
    }
    this.removeEvents = () => {
        target.removeEventListener('mousemove', this.onMouseMove)
        target.removeEventListener('mouseleave', this.onMouseLeave)
    }
}

