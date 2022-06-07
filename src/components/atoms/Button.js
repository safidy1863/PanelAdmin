export const ButtonRound = ({style,children}) => {
    return (
        <button className="button button-round" style={style}>{children}</button>
    );
};

export const ButtonSimple = ({style,children}) => {
    return (
        <button className="button button-simple" style={{...style}}>{children}</button>
    );
};