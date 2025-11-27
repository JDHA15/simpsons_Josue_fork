interface ParamsCharacter{
    params: Promise<{
        idcharacter: string
    }>
}

export default async function Idcharacter({params}: ParamsCharacter){
    const {idcharacter} = await params;
    return(
        <>
            <h1>{idcharacter}</h1>
        </>
    )
}