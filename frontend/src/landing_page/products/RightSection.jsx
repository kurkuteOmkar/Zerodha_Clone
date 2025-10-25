export default function RightSection({title,content,link,image}){
    return (
        <div className="container">
           <div className="row">
            <div className="col-6 " style={{marginTop:"170px"}}>
                <h1 style={{fontSize:"25px",marginBottom:"20px",fontWeight:"450"}}>{title}</h1>
                <p style={{width:"80%"}}>{content}</p>
                <div>
                    <a href="">{link}<i className="fa-solid fs-1 pl-2 fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className="col-6 p-5 text-center">
              <a href=""><img  style={{width:"550px"}} src={image} alt="" /></a>
            </div>
           </div>
        </div>
    )
}