import { Card } from "../ui/card"
const Data=[
  {
    id:1,
    title:'Workshops',
    img:'/asset/vector.png'
  },
  {
    id:2,
    title:'Music Shows',
    img:'/asset/vector.png'
  },
  {
    id:3,
    title:'Exhibitions',
    img:'/asset/vector.png'
  },
  {
    id:4,
    title:'Arts & Craft',
    img:'/asset/vector.png'
  },
  {
    id:5,
    title:'Sports',
    img:'/asset/vector.png'
  },
  {
    id:6,
    title:'Performance',
    img:'/asset/vector.png'
  },
  
]

const CardSection = () => {
  return (
    <div className="bg-dm_lightBlue">
      <div className="container mx-auto py-[20px]">
       <div className=" font-bold text-dm_text leading-[32px] text-f24">
        Events by Category
      </div> 
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-12 sm:grid-cols-3 gap-[16px] my-[20px]">
        {Data?.map((item)=>(
                <Card key={item.id} className="min-h-[240px] max-h-[240px] rounded-[12px] border-1 border-[#FFFFFF] flex flex-col justify-center items-center">
                <div className="w-[100px] h-[100px] bg-[#EDF7F6] rounded-full flex  justify-center items-center ">
                  <img src={item.img} alt='logo' width={54} height={48}/>
                  </div>
                <div className="mt-[16px] text-dm_text  font-semibold text-f20 leading-[25px] text-center">
                 {item.title}
                   </div>
                </Card>
        ))}
      </div>
      </div>
    </div>
  )
}

export default CardSection
