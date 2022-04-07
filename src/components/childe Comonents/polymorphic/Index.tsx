import { Text } from './Text'

const Index = () => {
  return (
    <div>

<h1>Polymorphic Components</h1>
<Text as='h1' size='lg'>Heading</Text>
<Text as='p'size='md'>Paragraph</Text>
<Text as='label' htmlFor ='someone' size='sm' color='secondary'>label</Text>



    </div>
  )
}

export default Index