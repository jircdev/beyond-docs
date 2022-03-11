export const BeyondModalContext = React.createContext();
export const useBeyondModalContext = () => React.useContext(BeyondModalContext);
const Children = ({children, close, dismiss}) => {
    const output = [];
    if (dismiss !== false) {
        output.push(
            <button
                className="close-icon"
                onClick={close} data-dismiss="modal" aria-label="Close"
                key="dismiss-button">x
            </button>
        );
    }
    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (React.isValidElement(child)) {
            const specs = {};
            //TODO: check a official way to check the children type
            return React.cloneElement(child, specs);
        }
        return child;
    });
    output.push(childrenWithProps);
    return (
        <BeyondModalContext.Provider value={{
            close,
            dismiss
        }}>{output}
        </BeyondModalContext.Provider>
    );

};
