export const ButtonRound = ({style,children}) => {
    return (
        <button className="button button-round" style={style}>{children}</button>
    );
};

export const ButtonSimple = ({style,type,children}) => {
    return (
        <button className="button button-simple" style={{...style}} type={type}>{children}</button>
    );
};