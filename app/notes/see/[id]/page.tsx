import { actionReadNote } from "@/src/actions/note.action";
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
          <div className="card">
            <div className="card-header">
              <h4>
                See note info <Link href="/notes">Go back</Link>{" "}
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    readOnly
                    defaultValue={`${note?.title}`}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea
                    readOnly
                    defaultValue={`${note?.content}`}
                    className="form-control"
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
