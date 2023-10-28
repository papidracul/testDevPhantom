import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import { Providers } from "@/components/Providers/chakraProvider/chackraProvider";
import { Grid, GridItem } from "@chakra-ui/react";

const inter = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-200 h-full`}>
        <Providers>
          <Grid
            templateAreas={`"sidebar nav"
                            "sidebar main"`}
            h="100vh"
            // gap="revert"
            w="100%"
            // gridTemplateRows={"50px 1fr 30px"}
            // gridTemplateColumns={"1fr 5fr"}
            // color="blackAlpha.700"
            // fontWeight="bold"
          >
            <GridItem
              pos="fixed"
              h="100%"
              minW="15.5%"
              area={"sidebar"}
              zIndex={3}
            >
              <Sidebar />
            </GridItem>
            <GridItem pos="fixed" area={"nav"} w="100%" zIndex={2}>
              <Navbar />
            </GridItem>
            <GridItem area={"main"} w="100%" h="100%" zIndex={1}>
              {children}
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
