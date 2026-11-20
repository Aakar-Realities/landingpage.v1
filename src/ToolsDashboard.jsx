import { useState, useId } from "react";
import {
  BellRing,
  Building2,
  Calendar,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileCheck2,
  FileSearch,
  NotebookPen,
  Search,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";

const tools = [
  {
    name: "Inventory Management System",
    description: "Track site materials, cement, steel, and stock inventory in real time.",
    url: "https://aakar-builderstore.ai.studio/",
    icon: Building2,
    visual: "inventory",
    tag: "Stock & Materials",
  },
  {
    name: "PO vs Invoice",
    description: "Compare purchase orders with supplier invoices side by side to catch discrepancies.",
    url: "https://povsinvoice-comparator.ai.studio/",
    icon: FileCheck2,
    visual: "invoice",
    tag: "Billing & Audit",
  },
  {
    name: "Task Management",
    description: "Organize project milestones, site inspections, and contractor progress.",
    url: "https://aakar-task.ai.studio",
    icon: ClipboardCheck,
    visual: "tasks",
    tag: "Site Projects",
  },
  {
    name: "HRMS",
    description: "Manage employee records, site attendance, and team directory.",
    url: "https://aakar-hrms-6587.ai.studio/",
    icon: UsersRound,
    visual: "hrms",
    tag: "Human Resources",
  },
  {
    name: "Vendor and Quote Analysis",
    description: "Review supplier bids, evaluate unit prices, and select the best quotation.",
    url: "https://vendorandquotationanalysis.ai.studio",
    icon: ChartNoAxesCombined,
    visual: "vendors",
    tag: "Procurement",
  },
  {
    name: "Research Tool",
    description: "Access construction market intelligence, commodity rates, and regulatory insights.",
    url: "https://researchdashboard.ai.studio",
    icon: FileSearch,
    visual: "research",
    tag: "Market Intel",
  },
  {
    name: "Search Engine",
    description: "Quickly find documents, drawings, bills, and data across all company drives.",
    url: "https://ai-search-os.ai.studio/",
    icon: Search,
    visual: "search",
    tag: "Universal Search",
  },
  {
    name: "Cashflow",
    description: "Clear overview of project cashflow, bank balances, and outflow forecasts.",
    url: "https://cashflowaakar.ai.studio/",
    icon: Wallet,
    visual: "cashflow",
    tag: "Finance",
  },
  {
    name: "E-Court Reminder Dashboard",
    description: "Stay ahead of legal hearings, court dates, and regulatory compliance notices.",
    url: "https://lexicislegal.ai.studio/",
    icon: BellRing,
    visual: "reminders",
    tag: "Legal Compliance",
  },
  {
    name: "MOM Creator",
    description: "Generate structured Minutes of Meeting with action items and export ready PDF.",
    url: "https://samvadini-mom-creator-ij2i.vercel.app",
    icon: NotebookPen,
    visual: "mom",
    tag: "Meeting Records",
  },
];

function ToolCard({ tool, index }) {
  const Icon = tool.icon;

  return (
    <a
      className="tool-card"
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${tool.name} in a new tab: ${tool.description}`}
      style={{ "--card-index": index }}
    >
      <div className={`tool-visual tool-visual--${tool.visual}`}>
        <div className="thumbnail-scene" aria-hidden="true">
          {tool.visual === "inventory" && (
            <div className="preview-card preview-card--inventory">
              <div className="preview-header">
                <span className="preview-pill">SITE STOCK</span>
                <span className="preview-status-pill">Active Site #4</span>
              </div>
              <div className="inventory-hero">
                <span className="inventory-num">128</span>
                <div className="inventory-meta">
                  <strong>Tracked Items in Stock</strong>
                  <span>Rebar, Cement, Pavers</span>
                </div>
              </div>
              <div className="inventory-tags">
                <span className="stock-tag">Cement: 450 Bags</span>
                <span className="stock-tag">Steel: 28 Tons</span>
              </div>
            </div>
          )}

          {tool.visual === "invoice" && (
            <div className="preview-card preview-card--invoice">
              <div className="preview-header">
                <span className="preview-pill">AUDIT STATUS</span>
                <span className="preview-match-pill">
                  <span className="pulse-dot pulse-dot--teal" />
                  100% MATCH
                </span>
              </div>
              <div className="invoice-rows">
                <div className="invoice-row">
                  <span className="invoice-lbl">PO #2048:</span>
                  <strong className="invoice-val">₹ 4,50,000</strong>
                </div>
                <div className="invoice-row">
                  <span className="invoice-lbl">Invoice #881:</span>
                  <strong className="invoice-val">₹ 4,50,000</strong>
                </div>
              </div>
              <div className="invoice-footer">
                <span>Verified vs Goods Receipt</span>
              </div>
            </div>
          )}

          {tool.visual === "tasks" && (
            <div className="preview-card preview-card--tasks">
              <div className="preview-header">
                <span className="preview-pill">ACTIVE MILESTONES</span>
                <span className="preview-status-pill">68% Done</span>
              </div>
              <div className="task-list">
                <div className="task-item task-item--done">
                  <CheckCircle2 size={16} />
                  <span>Site Safety Audit Complete</span>
                </div>
                <div className="task-item task-item--done">
                  <CheckCircle2 size={16} />
                  <span>Steel Delivery Verified</span>
                </div>
                <div className="task-item task-item--pending">
                  <Clock size={16} />
                  <span>Concrete Pouring Inspection</span>
                </div>
              </div>
              <div className="task-progress-track">
                <div className="task-progress-bar" style={{ width: "68%" }} />
              </div>
            </div>
          )}

          {tool.visual === "hrms" && (
            <div className="preview-card preview-card--hrms">
              <div className="preview-header">
                <span className="preview-pill">TEAM DIRECTORY</span>
                <span className="preview-status-pill">Staff Active</span>
              </div>
              <div className="hrms-list">
                <div className="hrms-item">
                  <div className="hrms-avatar">AS</div>
                  <div className="hrms-details">
                    <strong>Amit Sharma</strong>
                    <span>Project Manager</span>
                  </div>
                  <span className="hrms-badge">
                    <span className="pulse-dot pulse-dot--emerald" />
                    On Site
                  </span>
                </div>
                <div className="hrms-item">
                  <div className="hrms-avatar hrms-avatar--alt">RK</div>
                  <div className="hrms-details">
                    <strong>Rajesh Kumar</strong>
                    <span>Site Engineer</span>
                  </div>
                  <span className="hrms-badge">
                    <span className="pulse-dot pulse-dot--emerald" />
                    Active
                  </span>
                </div>
              </div>
            </div>
          )}

          {tool.visual === "vendors" && (
            <div className="preview-card preview-card--vendors">
              <div className="preview-header">
                <span className="preview-pill">QUOTE COMPARISON</span>
                <span className="preview-match-pill">⭐ BEST VALUE</span>
              </div>
              <div className="vendor-bids">
                <div className="vendor-bid vendor-bid--best">
                  <div className="bid-info">
                    <strong>Vendor B (Selected)</strong>
                    <span>Lowest Bid</span>
                  </div>
                  <span className="bid-price">₹ 12.4 Lakh</span>
                </div>
                <div className="vendor-bid">
                  <div className="bid-info">
                    <span>Vendor A (Higher)</span>
                  </div>
                  <span className="bid-price bid-price--alt">₹ 14.2 Lakh</span>
                </div>
              </div>
            </div>
          )}

          {tool.visual === "research" && (
            <div className="preview-card preview-card--research">
              <div className="preview-header">
                <span className="preview-pill">MARKET INTEL</span>
                <span className="preview-status-pill">Updated Weekly</span>
              </div>
              <div className="research-body">
                <strong>Raw Material Trends</strong>
                <p>Bulk Cement rates down 3.5% · TMT Steel supply steady across regional mills</p>
              </div>
            </div>
          )}

          {tool.visual === "search" && (
            <div className="preview-card preview-card--search">
              <div className="preview-header">
                <span className="preview-pill">CENTRAL SEARCH</span>
              </div>
              <div className="search-bar-mock">
                <Search size={15} />
                <span>Search drawings, invoices, bills...</span>
              </div>
              <div className="search-hint-text">
                <span>Instant search across all 10 corporate portals</span>
              </div>
            </div>
          )}

          {tool.visual === "cashflow" && (
            <div className="preview-card preview-card--cashflow">
              <div className="preview-header">
                <span className="preview-pill">NET CASHFLOW</span>
                <span className="cashflow-growth-badge">
                  <span className="pulse-dot pulse-dot--sky" />
                  +12.8% Healthy
                </span>
              </div>
              <div className="cashflow-val">₹ 8,42,650</div>
              <svg viewBox="0 0 220 36" className="cashflow-chart-svg" role="presentation">
                <path
                  className="cashflow-fill"
                  d="M0 28 C30 26 50 14 85 18 S140 22 170 10 S200 12 220 3 V36 H0Z"
                />
                <path
                  className="cashflow-line"
                  d="M0 28 C30 26 50 14 85 18 S140 22 170 10 S200 12 220 3"
                />
              </svg>
            </div>
          )}

          {tool.visual === "reminders" && (
            <div className="preview-card preview-card--reminders">
              <div className="preview-header">
                <span className="preview-pill">LEGAL NOTICE</span>
                <span className="court-urgent-badge">
                  <span className="pulse-dot pulse-dot--red" />
                  Oct 16 · 10:30 AM
                </span>
              </div>
              <div className="court-info">
                <div className="court-title-row">
                  <Calendar size={16} />
                  <strong>High Court Hearing</strong>
                </div>
                <div className="court-bench">Bench 4 · Municipal Regulatory Compliance</div>
              </div>
            </div>
          )}

          {tool.visual === "mom" && (
            <div className="preview-card preview-card--mom">
              <div className="preview-header">
                <span className="preview-pill">MINUTES OF MEETING</span>
                <span className="preview-status-pill">Ready to PDF</span>
              </div>
              <div className="mom-info">
                <strong>Site Progress Review Meeting</strong>
                <div className="mom-points">
                  <span>• 4 Partners in Attendance</span>
                  <span>• 3 Key Action Items Assigned</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <span className="visual-icon-badge" aria-hidden="true">
          <Icon size={22} strokeWidth={2} />
        </span>
        <span className="visual-index" aria-label={`Tool number ${index + 1}`}>
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="tool-info">
        <div className="tool-tag">{tool.tag}</div>
        <div className="tool-info-copy">
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      </div>
    </a>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputId = useId();

  const filteredTools = tools.filter((tool) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tag.toLowerCase().includes(q)
    );
  });

  return (
    <main className="dashboard">
      <header className="dashboard-header animate-header">
        <a className="brand" href="#home" aria-label="Aakar Realities home">
          <img
            className="brand-mark"
            src="/images/aakar-realities-logo.png"
            alt="Aakar Realities Logo"
          />
          <div className="brand-copy">
            <span className="brand-name">
              Aakar <strong>Realities</strong>
            </span>
            <span className="brand-tagline">Corporate Workspace</span>
          </div>
        </a>
      </header>

      <section className="dashboard-content" id="home">
        <div className="welcome">
          <div className="welcome-copy">
            <div className="eyebrow animate-hero-1">
              <span className="eyebrow-line" />
              Aakar Realities · Workspace Directory
            </div>
            <h1 className="animate-hero-2">
              The right tools.
              <br />
              <span>All in one place.</span>
            </h1>
            <p className="welcome-description animate-hero-3">
              Your centralized workspace for site inventory, invoice audits,
              project tasks, cashflow management, and legal reminders. Click any
              tool below to launch it directly in a new window.
            </p>

            {/* Quick Search */}
            <div className="search-bar-container animate-hero-4">
              <label htmlFor={searchInputId} className="visually-hidden">
                Search tools
              </label>
              <div className="search-input-box">
                <Search size={22} className="search-icon" aria-hidden="true" />
                <input
                  id={searchInputId}
                  type="text"
                  className="search-input"
                  placeholder="Type to find a tool (e.g. invoice, cashflow, inventory, tasks)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="welcome-art animate-art" aria-hidden="true">
            <div className="welcome-art-ring welcome-art-ring--outer" />
            <div className="welcome-art-ring welcome-art-ring--middle" />
            <div className="welcome-art-ring welcome-art-ring--inner" />
            <div className="welcome-art-center">
              <img src="/images/aakar-realities-logo.png" alt="" />
            </div>
            <span className="welcome-art-dot welcome-art-dot--one" />
            <span className="welcome-art-dot welcome-art-dot--two" />
          </div>
        </div>

        <section className="tools-section" id="tools" aria-labelledby="tools-title">
          <div className="tools-heading">
            <div>
              <span className="eyebrow">Direct Tool Access</span>
              <h2 id="tools-title">Explore your tools</h2>
            </div>
          </div>

          {filteredTools.length === 0 ? (
            <div className="no-results-box">
              <p>No tools matched &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                className="reset-search-btn"
                onClick={() => setSearchQuery("")}
              >
                Show all {tools.length} tools
              </button>
            </div>
          ) : (
            <div className="tools-grid">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          )}
        </section>
      </section>

      <footer className="dashboard-footer">
        <div className="footer-left">
          <a className="footer-brand" href="#home">
            Aakar Realities
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
