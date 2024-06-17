"use client"
const ClientSideComponent = dynamic(() => import('@/components/dashboard/d-content/Dashboard'), { ssr: false });
import { AppProvider } from "@/context/AppContext";
import { DropdownProvider } from "@/context/DDOrderContext";
import { ServicesProvider } from "@/context/DDServicesContext";
import { StatusProvider } from "@/context/DDStatusContext";
import { EditModalProvider } from "@/context/EditColumnModalContext";
import { MenuProvider } from "@/context/MenuContext";
import { ModalProvider } from "@/context/ModalContext";
import dynamic from "next/dynamic";


export default function Home() {
  return (
    <AppProvider>
      <MenuProvider>
        <ModalProvider>
          <EditModalProvider>
            <DropdownProvider>
              <ServicesProvider>
                <StatusProvider>
                  <ClientSideComponent />
                </StatusProvider>
              </ServicesProvider>
            </DropdownProvider>
          </EditModalProvider>
        </ModalProvider>
      </MenuProvider>
    </AppProvider>
  );
}
