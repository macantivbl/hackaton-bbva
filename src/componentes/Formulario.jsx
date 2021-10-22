import React from 'react'

const Formulario = () => {
    return (
        <div>
            <form
                className="row justify-content-end"
                action="./PaginaRegistro.html"
                target="_top"
            >
                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="autoSizingInput"
                        placeholder="Jane Doe"
                    />
                </div>
                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="autoSizingInputGroup"
                    >Username</label
                    >
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                            type="text"
                            className="form-control"
                            id="autoSizingInputGroup"
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                    <select className="form-select" id="autoSizingSelect">
                        
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="autoSizingCheck"
                        />
                        <label className="form-check-label" htmlFor="autoSizingCheck">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario
