export default function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore,link1,link2}){
    return (
        <div className="Container " style={{marginTop:"40px"}}>
    <div className="row">
        <div className="col-6 p-5 text-center">
            <img style={{width:"70%"}} src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
            <h1 style={{fontSize:"25px",marginBottom:"20px",fontWeight:"450"}}>{productName}</h1>
            <p style={{width:"80%"}}>{productDescription}</p>
            <div className="mb-4">
                {link1 && <a href={tryDemo}>{link1}<i className="fa-solid fs-1 pl-2 fa-arrow-right-long"></i></a>}
                {link2 && <a href={learnMore} style={{marginLeft:"50px"}}>{link2}<i className="fs-1 pl-2 fa-solid fa-arrow-right-long"></i></a>}
            
            </div>
            <div className="mt-3">
            <a href={tryDemo}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
            <a href={tryDemo} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
            </div>
        </div>
    </div>
        </div>
    )
}