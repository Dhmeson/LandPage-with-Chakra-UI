import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import arrow from '../assets/arrow.svg'
export default function Header(){
    return(
        <Flex as="header"  w="100%" h={50} align={"center"} >
            <Box w={"20%"}>
                <Text fontWeight={"extrabold"} fontSize="large" fontFamily={"Montserrat"} >Projeto</Text>
            </Box>
            <Box w={"50%"} color={"#585858"} fontWeight="600" fontFamily={"Montserrat"}>
                <Breadcrumb separator='' >
                    <BreadcrumbItem>
                     <BreadcrumbLink href='#' _hover={{color:"#2B788B"}}>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                     <BreadcrumbLink href='#' _hover={{color:"#2B788B"}}>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                     <BreadcrumbLink href='#' _hover={{color:"#2B788B"}}>Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <HStack  w={"30%"} fontFamily={"Montserrat"} justify="end">
                <Text fontWeight={"extrabold"} _hover={{cursor:"pointer"}}>Login </Text>
                <Image width={5} src={arrow} ></Image>
                <Button rounded={"2xl"} bgColor="#2B788B" color={"white"}>Sign Up</Button>
            </HStack>
         
        </Flex >
    )
}