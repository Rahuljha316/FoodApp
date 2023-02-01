import { restuarentlist } from '../config';
import RestuarentCard from './RestuarentCard'

const Body = ()=>{
    return (
        <div className="restaurent-list">
            {/* {RestuarentCard(restuarentlist[0])} */}
            {
                restuarentlist.map(
                    (restaurent) => {
                        return <RestuarentCard {...restaurent.data.data} key={restaurent.data.data.id}/>
                    }
                )
            }
            {/* <RestuarentCard {...restuarentlist[0].data.data}/>
            <RestuarentCard {...restuarentlist[1].data.data}/>
            <RestuarentCard {...restuarentlist[2].data.data}/>
            <RestuarentCard {...restuarentlist[3].data.data}/>
            <RestuarentCard {...restuarentlist[4].data.data}/> */}
            {/* <RestuarentCard restuarent={restuarentlist[5]}/>
            <RestuarentCard restuarent={restuarentlist[6]}/> */}
            

        </div>
    )
}

export default Body;