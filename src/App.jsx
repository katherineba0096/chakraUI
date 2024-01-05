import { Box, Heading, Button, Flex, Stack, Center } from '@chakra-ui/react'
import bgImage from './resources/image/montana-banner.jpg'
//import './App.css'

function App() {

  return (
    <Box
      h='40vh'
      bg='gray'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex
        direction='column'
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 50%)'
        p={['0 10%', null, '0 20%']}
      >
        <Heading
          color='white'
          textTransform='uppercase'
          textAlign='Center'
          fontWeight='light'
          letterSpacing='5px'
        >
          Domina El Terreno
            
        </Heading>
        <Stack
          direction={{
            base: 'column',
            md: 'row'
          }}
          spacing='40px'
          mt='30px'
          w={['100%', null, 'auto']}
        >
          <Button
            variant='outline'
            size='lg'
            color='white'
            _hover={{
              color: 'black',
              bg: 'white'
            }}
          >
            VER DETALLES

          </Button>
          <Button
            variant='outline'
            size='lg'
            color='white'
            _hover={{
              color: 'black',
              bg: 'white'
            }}

          >
            VER VIDEO
            
          </Button>
        </Stack>
      </Flex>

    </Box>


  )
}

export default App
