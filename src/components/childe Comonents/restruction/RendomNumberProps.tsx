
type RandomNumberType={
  value:number
}
type PostiveNumber =RandomNumberType &{
  isPositive:boolean
  isNegative?:never
  isZero?:never
}

type NegativeNumber =RandomNumberType &{
  isNegative:Boolean
  isPositive?:never
  isZero?:never
}
type Zero =RandomNumberType &{
  isZero:Boolean
  isNegative?:never
  isPositive?:never
}
type RandomNumberProps=PostiveNumber|NegativeNumber|Zero





export const RendomNumberProps = ({value,isPositive,isNegative,isZero}:RandomNumberProps) => {
  return (
    <div>
<h4>Restructed props </h4>
    RendomNumberProps
    {value} {isPositive && 'positive'} {isNegative &&'negative'} {''}
    {isZero &&'zero'}
<br/>
    </div>
  )
}
