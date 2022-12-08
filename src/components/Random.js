function Random  (props)  {
    const randomValue = Math.floor(Math.random()*(props.max - props.min) + props.min)
    return (
        <h1 className="random"> Random value between {props.min} and {props.max} {'=>'} {randomValue}</h1>
    )
}

export default Random