
export async function POST(req){
 const {brief}=await req.json()
 return Response.json({text:`🔥 Hook cho: ${brief}\n🎬 Script demo tạo tự động.`})
}
