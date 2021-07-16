import {BUY_ICECREAM} from './IceType'

export const buyIce=(number=1)=>
{
    return{
    type: BUY_ICECREAM,
    payload:number
    }
}

