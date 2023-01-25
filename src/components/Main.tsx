import { Box ,Flex,Text,Image, Button} from "@chakra-ui/react";
import plataformImg from '../assets/plataform.png'
import rain from '../assets/rain.svg'
import hours from '../assets/hours.svg'
import girl from '../assets/girl.svg'
import shoes from '../assets/shoes.svg'
import frame from '../assets/frame.svg'
import activeUserImg from '../assets/active-user.svg'
import { boy ,planta} from "../imagesPath";
import '../index.css'
export default function Main(){
  
    return(
        <Flex as={"main"} w="100%" direction={"row"} wrap={"wrap"} id="main" mt="5" overflowX={"hidden"} >
            <Box  w={{ base: '100%', lg: '50%' }}  pl={{ base: '10%',md:"20%" ,lg: '0%' }} h={{base:"400",md:"500"}}>
                <Image src={plataformImg}></Image>
                <Text fontSize={{base:"35",lg:"60"}} letterSpacing="wide" fontWeight="extrabold" >Learning and</Text>
                <Text fontSize={{base:"35",lg:"60"}}letterSpacing="wide" fontWeight="extrabold">teaching online,</Text>
                <Text fontSize={{base:"35",lg:"60"}}letterSpacing="wide" fontWeight="extrabold">made easy.</Text>
                <Text fontSize={{base:"15",lg:"20"}} color={"#757575"} mt="2">Practice your English and learn new things with the platform.</Text>

                <Button bgColor={"#94e5f2"} color="#2B788B" rounded={"2xl"} fontWeight="bold" mt={5}>About plataform</Button>
                <Flex direction={"row"}  mt={8} gap={{base:10,lg:20}}>
                    <Flex direction={"column"}>
                        <Flex gap={2}>
                            <Image w={{ base: '20px', lg: '50px' }} src={rain}></Image>
                            <Image w={{ base: '70px', lg: '100%' }} src={hours}></Image>
                        </Flex>
                        <Text textAlign={"center"} color="#585858" fontSize={{base:"10",lg:"15"}}>Hours of content</Text>
                    </Flex>
                    <Flex direction={"column"}  >
                        <Flex gap={2}>
                            <Image w={{ base: '20px', lg: '50px' }}   src={rain}></Image>
                            <Image w={{ base: '70px', lg: '100%' }}  src={activeUserImg}></Image>
                        </Flex>
                        <Text textAlign={"center"} color="#585858" fontSize={{base:"10",lg:"15"}}>Active Users</Text>
                    </Flex>
                </Flex>
            </Box>

            <Flex w={{ base: '100%', lg: '50%' }}    h={{base:"300",md:"500"}} pos="relative"  pl={{ base: '10%',md:"20%" ,lg: '0%' }}>
                <Image objectFit="scale-down"  src={boy}></Image>

                <Image src={planta} pos="absolute" bottom={5} right={{base:0,md:20,lg:10}} opacity={0.5} width={{base:"100px",md:"150px",lg:"200px"}}></Image>
            </Flex>
          
            <Flex display={{base:"none",md:"flex"}} w={{ base: '100%', lg: '50%' }} h={{base:"300",md:"500"}}  mt={{base:"0px",lg:"20px"}}>
                <Image  src={girl}></Image>
            </Flex>
            <Flex   w={{ base: '100%', lg: '50%' }} h={{base:"300",md:"500"}} mt={{base:"10px",lg:"20px"}}  direction="column"> 
                <Text fontSize={{base:"35",lg:"60"}}  letterSpacing="wide" fontWeight="extrabold">Learn a language in a playful way</Text>
                <Text color={"#757575"} mt="2">Make learning words more fun with mini-games</Text>
                <Box display={"flex"} mt={{base:"15px",lg:"20px"}}  gap={10}>
                    <Image objectFit="scale-down"  src={shoes} _hover={{cursor:"pointer",opacity:0.8}}></Image>
                    <Image objectFit="scale-down"  src={frame} _hover={{cursor:"pointer",opacity:0.8}}></Image>
                </Box>
            </Flex>

           
           
           
        </Flex>
    )
}