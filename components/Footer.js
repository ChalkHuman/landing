import { Flex, Link, Text } from "rebass"

let FootLink = ({ sx, ...props }) =>
    <Link sx={{
        color: "text",
        textDecoration: "none",
        ":hover": {
            textDecoration: "underline",
            cursor: "pointer"
        }
    }} {...props} />

export default () =>
    <Flex mt="auto" height="100px">
        <Text m="auto"><FootLink href="mailto:neel.redkar@gmail.com">Contact Me</FootLink> | <FootLink href="https://github.com/ensio-app">GitHub</FootLink></Text>
    </Flex>