import * as React from 'react';

export /*bundle*/
function useModel({model, props, onChange}) {

    const [controller, setModel] = React.useState();
    const onLoad = () => {
        const instance = new model(props);
        const onChangeMethod = () => {
            if (onChange) onChange(controller);
        }
        if (onChange) {
            instance.bind('change', onChangeMethod);
        }
        setModel(instance);
        return () => instance.unbind('change', onChangeMethod);

    }
    React.useEffect(onLoad, []);

    return [controller];
}

