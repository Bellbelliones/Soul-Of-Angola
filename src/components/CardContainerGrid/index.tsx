import { CardPost } from "../CardPost"

export const CardContainerGrid = ()=>
{
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4">
                <CardPost cardImage="/dancando.png" cardVideo="/angola.mp4" title="Dançarinos Angolanos" descrition="Venha saber desta cultura intrigante" userImage="/logo2.png" userName="Rodolfo Guzman"/>
                <CardPost cardImage="/pousando.png" cardVideo="/angola.mp4" title="Sempre Angola" descrition="Venha saber desta cultura intrigante" userImage="/logo2.png" userName="Rodolfo Guzman"/>
                <CardPost cardImage="/dancando.png" cardVideo="/angola.mp4" title="Dançarinos Angolanos" descrition="Venha saber desta cultura intrigante" userImage="/logo2.png" userName="Rodolfo Guzman"/>
            </div>
        </>
    )
}