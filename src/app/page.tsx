"use client"
import { AppProvider } from "@/context/AppContext";
import { DropdownProvider } from "@/context/DDOrderContext";
import { ServicesProvider } from "@/context/DDServicesContext";
import { EditModalProvider } from "@/context/EditColumnModalContext";
import { MenuProvider } from "@/context/MenuContext";
import { ModalProvider } from "@/context/ModalContext";
import Dashboard from "@/pages/dashboard/Dashboard";


export default function Home() {
  return (
    <AppProvider>
      <MenuProvider>
        <ModalProvider>
          <EditModalProvider>
            <DropdownProvider>
              <ServicesProvider>
                <Dashboard />
              </ServicesProvider>
            </DropdownProvider>
          </EditModalProvider>
        </ModalProvider>
      </MenuProvider>
    </AppProvider>
  );
}
