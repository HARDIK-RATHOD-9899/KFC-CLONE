import Beverages from "./Beverages"
import Biryani from "./Biryani"
import Box from "./Box"
import Burger from "./Burger"
import Chicken from "./Chicken"
import NewLaunch from "./NewLaunch"
import Rolls from "./Rolls"
import SearchBox from "./SearchBox"


export const MenuItem= ()=>{

return(
    <div>
        <SearchBox/>
        <Chicken/>
        <NewLaunch/>
        <Rolls/>
        <Biryani/>
        <Box/>
        <Burger/>
        <Beverages/>
    </div>
)

}