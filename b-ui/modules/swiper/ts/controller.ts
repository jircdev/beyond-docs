import * as  Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper';
import {ReactiveModel} from "@beyond/ui/reactive-model/ts";

const SwiperCasted: typeof Swiper.Swiper = (Swiper.Swiper as unknown as typeof Swiper.default);

export class Controller extends ReactiveModel {
    #swiper
    get swiper(): any {
        return this.#swiper;
    }

    #onEnd: boolean;
    #props;
    setSwiper = (element, props, ref): void => {
        this.#props = props
        const specs = Object.assign({
            slidesPerView: props.slidesPerView ?? 1,
            modules: [Navigation, Pagination],
        }, props);
        console.log(10, specs, props)
        if (props.pagination || props.footer) {
            specs.pagination = {
                el: ref.pagination.current,
                clickable: true,
            };
        }

        if (props.navigation) {
            specs.navigation = {
                nextEl: ref.next.current,
                // prevEl: ref.prev.current,
            }
        }

        this.#swiper = new SwiperCasted(element, specs);
        this.#swiper.on("slideChange", () => {
            if (this.#swiper.isEnd) {
                this.#onEnd = true;
                this.triggerEvent();
            } else {
                this.#onEnd = false;
                this.triggerEvent();
            }

        });
    }


    next: () => void = (): void => {
        if (!this.#swiper.isEnd) {
            this.#swiper?.slideNext(500, false);
            return;
        }
        if (!this.#onEnd) return;
        this.#props.functionNext();
    };
};


