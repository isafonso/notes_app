import { actionCreateNote } from "@/src/actions/note.action";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Add Note{" "}
                <Link href="/notes" target="">
                  Go back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form action={actionCreateNote}>
                <div className="mb-3">
                  <label>Title</label>
                  <input
                    required
                    type="text"
                    name="title"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Content</label>
                  <textarea
                    name="content"
                    id=""
                    cols={30}
                    rows={10}
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Create"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
