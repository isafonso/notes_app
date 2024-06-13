import { actionGetQuery, actionReadAllNotes } from "@/src/actions/note.action";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const notes = await actionReadAllNotes();

  return (
    <Suspense fallback={<h1>We're loading your data.</h1>}>
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
                <h4>
                  Notes details
                  <Link
                    href="/notes/create"
                    className="btn btn-primary float-end"
                  >
                    Add note
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
              <>
                <h1 className="h1 text-center mt-5">
                  You haven´t a note saved yet.
                  <br />
                  <Link href={"/notes/create"} className="h4 text-center mt-1">
                    Click here or in the "Add note" button to create one
                  </Link>
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
