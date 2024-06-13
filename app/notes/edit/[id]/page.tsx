import { actionReadNote, actionUpdateNote } from "@/src/actions/note.action";
import Link from "next/link";

type TParams = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: TParams) {
  const note = await actionReadNote(params.id);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          {note ? (
            <div className="card">
              <div className="card-header">
                <h4>
                  Edit note <Link href="/notes">Go back</Link>
                </h4>
              </div>
              <div className="card-body">
                <form action={actionUpdateNote}>
                  <input name="id" defaultValue={note.id} hidden />
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      required
                      type="text"
                      name="title"
                      defaultValue={note.title}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                      name="content"
                      id=""
                      cols={30}
                      rows={10}
                      defaultValue={note.content}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <h4 className="text-center">
              We couldn´t find a note with the ID {params.id} <br />
              <Link href="/notes">Go back</Link>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
