import { actionDeleteNote, actionReadNote } from "@/actions/note.action";
import Link from "next/link";

type TParams = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: TParams) {
  const note = await actionReadNote(params.id);

  return (
    <div>
      <h1 className="h1 text-center">
        Are you sure you want to delete the note{" "}
        <strong className="h3">{note?.title}</strong> ?
      </h1>
      <form
        action={actionDeleteNote}
        className="d-flex justify-between items-center"
        method="post"
      >
        <input type="hidden" value={note?.id} name="id" />
        <div className="d-flex justify-between items-center">
          <Link href="/notes" className="btn btn-primary btn-lg">
            Cancel
          </Link>
          <input
            type="submit"
            className="btn btn-danger btn-lg"
            value="Delete"
          ></input>
        </div>
      </form>
    </div>
  );
}
