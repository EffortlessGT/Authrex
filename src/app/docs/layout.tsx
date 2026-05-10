"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import "./docs.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <Navbar />
      <div className="docs-container">
        
        <button 
          className="docs-mobile-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span>Menu</span>
          <i className={`fa-solid ${isSidebarOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </button>

        <aside className={`docs-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <h3>Getting Started</h3>
          <ul>
            <li>
              <Link href="/docs" className={isActive("/docs") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/docs/installation" className={isActive("/docs/installation") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Installation
              </Link>
            </li>
          </ul>

          <h3>Core Concepts</h3>
          <ul>
            <li>
              <Link href="/docs/authentication" className={isActive("/docs/authentication") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Authentication
              </Link>
            </li>
            <li>
              <Link href="/docs/authorization" className={isActive("/docs/authorization") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Authorization Policies
              </Link>
            </li>
            <li>
              <Link href="/docs/zero-trust" className={isActive("/docs/zero-trust") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Zero Trust Architecture
              </Link>
            </li>
          </ul>

          <h3>Integration</h3>
          <ul>
            <li>
              <Link href="/docs/sdk" className={isActive("/docs/sdk") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                SDKs & APIs
              </Link>
            </li>
            <li>
              <Link href="/docs/webhooks" className={isActive("/docs/webhooks") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
                Webhooks
              </Link>
            </li>
          </ul>
        </aside>

        <main className="docs-content">
          {children}
        </main>
      </div>
    </>
  );
}
