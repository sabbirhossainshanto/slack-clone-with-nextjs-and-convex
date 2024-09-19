'use client'
import UserButton from "@/features/auth/components/user-button";
import { useGetWorkSpaces } from "@/features/workSpaces/api/use-get-workSpaces";
import { useCreateWorkSpacesModal } from "@/features/workSpaces/store/use-create-workSpaces-modal";
import { useEffect, useMemo } from "react";

export default function Home() {
  const [open,setOpen] = useCreateWorkSpacesModal()
  const { data, isLoading } = useGetWorkSpaces();
  const workSpacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workSpacesId) {
      console.log("redirect to workspaces");
    } else if(!open) {
    setOpen(true)
    }
  }, [isLoading, workSpacesId,open,setOpen]);
  return (
    <div>
      <UserButton />
    </div>
  );
}
