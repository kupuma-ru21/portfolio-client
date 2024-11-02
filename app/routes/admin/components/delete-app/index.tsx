import { useIndex } from "./useIndex";
import { Button } from "~/components/ui/button";

export const DeleteButton = ({ id }: { id: string }) => {
  const { fetcher, isDeletingApp } = useIndex();

  return (
    <fetcher.Form method="POST">
      <Button type="submit" variant="solid" loading={isDeletingApp}>
        Delete
      </Button>
      <input type="hidden" name="appId" value={id} />
    </fetcher.Form>
  );
};
