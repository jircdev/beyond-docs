import * as React from "react";
import {ErrorImage} from "./error";


type IProps = {
    src?: string;
    alt: string;
    graphSrc?: string;
    size?: string;
    className?: string;
    onClick?: (e: React.SyntheticEvent) => void;
    children?: React.ReactNode;
    loading?: "eager" | "lazy";
    onError?: (e: React.SyntheticEvent) => void;
}

interface IState {
    size: string;
    error?: boolean;
    loaded: boolean;
    url?: string;
    onload?: undefined;
    src?: string;
    htmlLoaded?: boolean;
    loading?: string;
}

export /*bundle*/
function BeyondImage(props: IProps): JSX.Element {


    const initialState: IState = {size: '200x200', loaded: false}
    const {className, onClick, children, src, alt, size} = props;
    const [image, setImage] = React.useState<HTMLImageElement | IState>();
    const [state, setState] = React.useState<IState>(initialState);
    const onLoad = () => setState({...state, error: false, htmlLoaded: true});
    const loadImage = (url, size) => {
        let finalSrc = url;

        const newImage = new Image();
        newImage.onload = () => setState({...state, loaded: true, error: false});
        newImage.onerror = () => setState({...state, error: true, loaded: false});
        newImage.src = finalSrc;
        setImage(newImage);
        setState({...state, url: url, size: size, src: finalSrc, loaded: true});
    };

    React.useEffect(() => {

        const currentSrc = src;
        if (state.url !== currentSrc) {
            let size = props.size ?? state.size;
            loadImage(currentSrc, size);
        }

        return () => setImage({...state, onload: undefined, onerror: undefined});
        // eslint-disable-next-line
    }, [src]);

    const {error, loaded, htmlLoaded} = state;


    let cls = `beyond-element-image ${className ? ` ${className}` : ''}`;
    if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
    if (error) cls += " beyond-element-image-error"


    const properties = {...props, className: cls, onClick};
    delete properties.src;
    delete properties.alt;
    delete properties.onError;
    delete properties.children;
    delete properties.size;
    delete properties.loading;


    if (error) {
        return <ErrorImage key="error" onError={props.onError} src={src} properties={properties}/>
    }

    return (
        <figure data-src={src} {...properties}>
            <img
                src={src}
                onLoad={onLoad}
                loading={props.loading ?? "eager"} alt={alt}/>
            {children}
        </figure>
    );


};

