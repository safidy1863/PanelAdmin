

export const ButtonSimple = ({style,type,children}) => {
    return (
        <button className="button button-simple" style={{...style}} type={type}>{children}</button>
    );
};