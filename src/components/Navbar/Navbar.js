import React from 'react'

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
				<a className="navbar-brand font-weight-bolder mr-3" href="index.html"><img src="assets/img/logo.png" /></a>
				<button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsDefault">
					<ul className="navbar-nav mr-auto align-items-center">
						<form className="bd-search hidden-sm-down">
							<input type="text" className="form-control bg-graylight border-0 font-weight-bold" id="search-input" placeholder="Search..." autocomplete="off" />
							<div className="dropdown-menu bd-search-results" id="search-results">
							</div>
						</form>
					</ul>
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item">
							<a className="nav-link active" href="index.html">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="post.html">Post</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="author.html"><img className="rounded-circle mr-2" src="./av.png" width="30" /><span className="align-middle">Author</span></a>
						</li>
						<li className="nav-item dropdown">
							<a classNameName="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg className="_3DJPT" version="1.1" viewbox="0 0 32 32" width="21" height="21" aria-hidden="false" data-reactid="71"><path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" data-reactid="22"></path></svg>
							</a>
							<div className="dropdown-menu dropdown-menu-right shadow-lg" aria-labelledby="dropdown02">
								<h4 className="dropdown-header display-4">Download Pintereso<br/> HTML Bootstrap Template</h4>
								<div className="dropdown-divider">
								</div>
								<span className="dropdown-item"><a href="https://github.com/wowthemesnet/template-pintereso-bootstrap-html/archive/master.zip" className="btn btn-primary d-block"><i className="fa fa-download"></i> Download</a></span>
							</div>
						</li>
					</ul>
				</div>
			</nav> 
		</div>
	)
}

export default Navbar