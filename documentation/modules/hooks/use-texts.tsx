import {useState, useEffect} from 'react';

export /*bundle*/function useTexts(model) {

    const [texts, setTexts] = useState(model.value);
    const [ready, setReady] = useState(model.ready);
    useEffect(() => {
        if (!model.ready) return;
        const onChange = () => {
            setTexts(model.value);
            setReady(model.ready);
        }
        model.bind('change', onChange);
        return () => model.unbind('change', onChange);

    }, []);
    return [ready, texts];
}
