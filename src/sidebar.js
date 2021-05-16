import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Admin Panel</div>
            </a>

            <hr class="sidebar-divider my-0"/>

            <li class="nav-item active">
                <Link to="/" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                <Link to="/User" class="nav-link collapsed">
                    <i class="fas fa-fw fa-user"></i>
                    <span>Users</span>
                </Link>
                
            </li>

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/CreateUser"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-user-plus"></i>
                    <span>Create User</span>
                </Link>
                
            </li>

            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
                Addons
            </div>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            {/* <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> */}

            <hr class="sidebar-divider d-none d-md-block"/>

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div class="sidebar-card">
                <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt=""/>
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
        </>
    );
}

export default Sidebar;
