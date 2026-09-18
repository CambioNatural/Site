import NavbarClient, { type NavbarProps } from "./NavbarClient";
import { getPublishedDocument } from "@/lib/cms/data";
export default async function Navbar(props: NavbarProps) {
 const navigation = props.navigation ?? (await getPublishedDocument()).navigation;
 return <NavbarClient {...props} navigation={navigation} />;
}
