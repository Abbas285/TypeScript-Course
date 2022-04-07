
import { Box } from './Box'
import { ThemeContextProvider } from './ThemeContext'
import UserContextIndex from './UserContextIndex'
const Index = () => {
  return (<>
      <ThemeContextProvider>
     <Box/>
      </ThemeContextProvider>
      <UserContextIndex/>
      </>
  )
}

export default Index