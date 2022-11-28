// import mui react stuff


export default function Mouse(props) {
    return (
        <div className="Mouse">
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
        </div>
    )
}