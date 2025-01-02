import LandingArticleGrids from "../../../mock/LandingArticleGrids";
function LandingArticleGrid() {
    
  return (
    <div className="m-auto container">
      <li className="list-disc text-black disc-green font-extrabold text-4xl mt-20">
        اخبار و مقالات{" "}
      </li>
      <h3 className="my-2 mb-10 font-extralight text-gray-600">
        خـــودت رو با خـــبر کن !{" "}
      </h3>
     
      <div className="grid grid-cols-4 grid-rows-2 gap-1 place-items-stretch mb-40 mx-40">
        {LandingArticleGrids.map((item)=>(
            
            <img key={item.id} src={item.img} alt={item.id} className={`hoverscale ${item.class} 	`}  />
        ))}

      </div>
    </div>
  );
}

export default LandingArticleGrid;
