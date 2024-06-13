import { actionGetQuery, actionSearchNotes } from "@/src/actions/note.action";
import Link from "next/link";

type TParams = {
  params: {
    query: string;
  };
};

export default async function Page({ params }: TParams) {
  const notes = await actionSearchNotes(decodeURIComponent(params.query));

  return (
    <div className="container">
      <nav className="navbar bg-primary mt-2 mb-4">
        <div className="container-fluid">
          <form action={actionGetQuery} className="d-flex" role="search">
            <input
              style={{ width: "400px" }}
              required
              className="form-control me-2"
              type="search"
              name="query"
              defaultValue={`${decodeURIComponent(params.query)}`}
              placeholder="Write here the title or the content of the note"
              aria-label="Search"
            />
            <input
              className="btn btn-outline-light"
              type="submit"
              value={"Search"}
            />
          </form>
        </div>
      </nav>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong className="h5">Hi!</strong>{" "}
        <span className="h5">Welcome to your management system notes</span>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-5">
            <div className="card-header">
              <h4 className="h4">
                Notes details{" "}
                <Link
                  href="/notes/create"
                  className="btn btn-primary float-end"
                >
                  Add note
                </Link>
                <Link href="/notes" className="btn btn-primary float-end me-1">
                  See all
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>CreatedAt</th>
                    <th>UpdatedAt</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {notes &&
                    notes.map((note) => (
                      <tr key={note.id} className="text-center">
                        <td>{note.id}</td>
                        <td>{note.title}</td>
                        <td>{note.content}</td>
                        <td>
                          {new Date(note.createdAt).toLocaleDateString()}
                          <br />
                          {new Date(note.createdAt).toLocaleTimeString()}
                        </td>
                        <td>
                          {new Date(note.updatedAt).toLocaleDateString()}
                          <br />
                          {new Date(note.updatedAt).toLocaleTimeString()}
                        </td>
                        <td className="d-flex justify-between items-center">
                          <Link
                            href={`/notes/see/${note.id}`}
                            className="btn btn-info btn-sm"
                          >
                            See
                          </Link>
                          <Link
                            href={`/notes/edit/${note.id}`}
                            className="btn btn-success btn-sm mx-3"
                          >
                            Edit
                          </Link>
                          <Link
                            href={`/notes/delete/${note.id}`}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {notes?.length === 0 && (
            <div className="text-center">
              <h1 className="h1 mt-5">
                We couldn't find a note with the pattern "
                {decodeURIComponent(params.query)}".
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
