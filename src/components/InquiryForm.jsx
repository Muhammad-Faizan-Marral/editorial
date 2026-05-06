import { useState } from "react";

const steps = ["Project", "Details", "Budget", "Review"];

const projectTypes = [
  "Editorial Illustration",
  "Brand Identity",
  "Publishing",
  "Packaging",
  "Motion Design",
  "Other",
];

const budgetRanges = [
  { label: "Under $500", sub: "Spot illustrations" },
  { label: "$500–$1,500", sub: "Editorial single" },
  { label: "$1,500–$5,000", sub: "Cover / series" },
  { label: "$5,000–$15,000", sub: "Campaign" },
  { label: "$15,000+", sub: "Agency / ongoing" },
  { label: "Open to Quote", sub: "Discuss with us" },
];

const illustrationCounts = ["1", "2–5", "6–10", "10+"];

const usageRights = [
  { label: "Print (magazine, newspaper)", tag: "Standard" },
  { label: "Digital / Web", tag: "Extended" },
  { label: "Advertising / Commercial", tag: "Full Buy-Out" },
  { label: "Merchandise / Product", tag: "Full Buy-Out" },
];

export default function InquiryForm() {
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    projectType: "Motion Design",
    description: "",
    client: "",
    deadline: "",
    illustrationCount: "2–5",
    usageRights: ["Print (magazine, newspaper)"],
    references: "",
    budget: "$1,500–$5,000",
    payment: "50% upfront / 50% on delivery",
    currency: "USD — US Dollar",
    budgetNotes: "",
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const toggleUsage = (label) => {
    set(
      "usageRights",
      form.usageRights.includes(label)
        ? form.usageRights.filter((r) => r !== label)
        : [...form.usageRights, label]
    );
  };

  const saveDraft = () => {
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="border-4 border-black p-12 text-center max-w-md w-full">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            Inquiry Received
          </p>
          <h1 className="text-5xl font-black uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            SUBMITTED
          </h1>
          <div className="inline-block bg-yellow-300 border-4 border-black px-4 py-1 text-xs font-black uppercase tracking-widest mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
            Inquiry #ECD-2026-0419
          </div>
          <p className="text-sm text-gray-600 mb-8">
            We'll respond within 24 hours. Check your inbox for confirmation.
          </p>
          <button
            onClick={() => { setSubmitted(false); setCurrent(0); }}
            className="border-4 border-black px-6 py-2 text-sm font-black uppercase tracking-widest bg-yellow-300 hover:bg-yellow-400 transition-colors w-full"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap');
        .oswald { font-family: 'Oswald', sans-serif; }
        .brutal-border { border: 3px solid #000; }
        .brutal-border-4 { border: 4px solid #000; }
        .input-brutal {
          width: 100%;
          border: 3px solid #000;
          padding: 0.5rem 0.75rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          outline: none;
          background: #fff;
          color: #1a1a1a;
          transition: background 0.15s;
        }
        .input-brutal:focus { background: #fffde0; }
        .select-brutal {
          width: 100%;
          border: 3px solid #000;
          padding: 0.5rem 0.75rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          background: #fff;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23000' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2rem;
        }
        .step-btn-active { background: #F9FF00; z-index: 2; }
        .type-btn-active { background: #F9FF00; z-index: 2; }
        .budget-btn-active { background: #F9FF00; z-index: 2; }
        .btn-brutal {
          border: 3px solid #000;
          padding: 0.4rem 1rem;
          font-family: 'Oswald', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .btn-brutal:hover { background: #e8e8e8; }
        .btn-brutal:disabled { opacity: 0.3; cursor: not-allowed; }
        .btn-yellow { background: #F9FF00; }
        .btn-yellow:hover { background: #e8ee00; }
        .btn-red { background: #FF0004; color: #fff; border-color: #FF0004; }
        .btn-red:hover { background: #cc0003; }
        @media (max-width: 768px) {
          .main-grid { display: block !important; }
          .right-panel-mobile { display: none; }
          .step-sidebar { position: fixed; top: 0; left: -100%; width: 80%; max-width: 280px; height: 100%; z-index: 50; transition: left 0.3s ease; background: #fff; border-right: 3px solid #000; overflow-y: auto; }
          .step-sidebar.open { left: 0; }
          .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40; }
          .sidebar-overlay.open { display: block; }
        }
        @media (min-width: 769px) {
          .mobile-step-bar { display: none !important; }
          .main-grid { display: grid; grid-template-columns: 200px 1fr 170px; }
          .step-sidebar { position: static !important; width: auto !important; height: auto !important; left: auto !important; background: transparent; border-right: 3px solid #000; }
          .sidebar-overlay { display: none !important; }
          .right-panel-mobile { display: block !important; }
        }
        @media (min-width: 1024px) {
          .main-grid { grid-template-columns: 220px 1fr 185px; }
        }
      `}</style>

      {/* SECTION HEADER */}
      <div className="border-b-4 border-black px-4 sm:px-8 lg:px-12 py-8 sm:py-10">
        <span className="oswald text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
          Start a Project
        </span>
        <h2 className="oswald text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
          INQUIRY
        </h2>
      </div>

      {/* MOBILE STEP BAR */}
      <div className="mobile-step-bar border-b-4 border-black bg-white flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="btn-brutal text-xs"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          Steps
        </button>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`h-2 w-8 border-2 border-black transition-all ${i <= current ? "bg-yellow-300" : "bg-white"}`}
            />
          ))}
        </div>
        <span className="oswald text-sm font-bold uppercase tracking-widest text-gray-500">
          {String(current + 1).padStart(2, "0")} / 04
        </span>
      </div>

      {/* SIDEBAR OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* MAIN GRID */}
      <div className="main-grid border-x-0 sm:border-x-4 border-black mx-0 sm:mx-4 lg:mx-12">

        {/* LEFT PANEL / SIDEBAR */}
        <div className={`step-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="p-5 h-full flex flex-col">
            {/* Mobile close */}
            <button
              className="btn-brutal mb-4 self-end md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              ✕ Close
            </button>

            <h3 className="oswald text-xs font-bold uppercase tracking-widest mb-2">Instructions</h3>
            <p className="text-xs leading-relaxed text-gray-500 mb-4">
              Complete all steps to submit your commission inquiry. Save as draft anytime.
            </p>

            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setSidebarOpen(false); }}
                className={`btn-brutal w-full text-left mb-[-3px] justify-between ${i === current ? "step-btn-active" : ""}`}
                style={{ borderWidth: "3px" }}
              >
                <span>{s}</span>
                <span className="text-gray-400 font-normal text-xs">{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}

            <div className="flex gap-1 mt-3 mb-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 border-2 border-black transition-all ${i <= current ? "bg-yellow-300" : "bg-white"}`}
                />
              ))}
            </div>

            <div className="border-3 brutal-border p-3 mt-auto" style={{ border: "3px solid #000" }}>
              <h4 className="oswald text-xs font-bold uppercase tracking-widest mb-1">Need Help?</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Use the chat widget in the bottom right to ask about commissions.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN FORM PANEL */}
        <div className="border-x-0 sm:border-x" style={{ borderLeft: "3px solid #000", borderRight: "3px solid #000" }}>
          <div className="p-4 sm:p-6 lg:p-8">

            {/* Note bar */}
            <div
              className="border-4 border-black p-3 mb-5 text-xs"
              style={{ background: savedFlash ? "#c8ffc8" : "#F9FF00" }}
            >
              {savedFlash ? (
                <><strong className="oswald uppercase">Draft Saved!</strong> Return anytime from your dashboard.</>
              ) : (
                <><strong className="oswald uppercase">Note:</strong> Log in to save drafts.{" "}
                  <a href="#" className="font-bold underline">Log in here</a>.</>
              )}
            </div>

            {/* ── STEP 0: PROJECT ── */}
            {current === 0 && (
              <div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Project Title *</label>
                  <input
                    className="input-brutal"
                    type="text"
                    placeholder="e.g., Spring Editorial Cover Series"
                    value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Project Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3" style={{ border: "3px solid #000" }}>
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => set("projectType", t)}
                        className={`px-2 py-2 oswald text-xs font-bold uppercase tracking-wide transition-colors ${form.projectType === t ? "type-btn-active" : "bg-white hover:bg-yellow-100"}`}
                        style={{ border: "3px solid #000", margin: "-1.5px" }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Project Description</label>
                  <textarea
                    className="input-brutal"
                    rows={4}
                    placeholder="Describe your project, target audience, and creative direction..."
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* ── STEP 1: DETAILS ── */}
            {current === 1 && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Publication / Client *</label>
                    <input className="input-brutal" type="text" placeholder="e.g., Vogue, Penguin Books" value={form.client} onChange={(e) => set("client", e.target.value)} />
                  </div>
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Deadline *</label>
                    <input className="input-brutal" type="date" value={form.deadline} onChange={(e) => set("deadline", e.target.value)} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Number of Illustrations</label>
                  <div className="grid grid-cols-4" style={{ border: "3px solid #000" }}>
                    {illustrationCounts.map((c) => (
                      <button
                        key={c}
                        onClick={() => set("illustrationCount", c)}
                        className={`py-2 oswald text-xs font-bold uppercase tracking-wide transition-colors ${form.illustrationCount === c ? "type-btn-active" : "bg-white hover:bg-yellow-100"}`}
                        style={{ border: "3px solid #000", margin: "-1.5px" }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Usage Rights Required</label>
                  <div style={{ border: "3px solid #000" }}>
                    {usageRights.map((r, i) => (
                      <label
                        key={r.label}
                        className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-yellow-50 transition-colors ${i < usageRights.length - 1 ? "border-b-2 border-black" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={form.usageRights.includes(r.label)}
                            onChange={() => toggleUsage(r.label)}
                            className="w-4 h-4 accent-yellow-300 border-2 border-black"
                          />
                          <span className="text-xs font-medium">{r.label}</span>
                        </div>
                        <span className="oswald text-xs text-gray-400 uppercase tracking-wide">{r.tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Reference Links / Mood Board URL</label>
                  <input className="input-brutal" type="text" placeholder="https://are.na/... or Pinterest board URL" value={form.references} onChange={(e) => set("references", e.target.value)} />
                </div>
              </div>
            )}

            {/* ── STEP 2: BUDGET ── */}
            {current === 2 && (
              <div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Budget Range *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3" style={{ border: "3px solid #000" }}>
                    {budgetRanges.map((b) => (
                      <button
                        key={b.label}
                        onClick={() => set("budget", b.label)}
                        className={`p-3 text-left transition-colors ${form.budget === b.label ? "budget-btn-active" : "bg-white hover:bg-yellow-50"}`}
                        style={{ border: "3px solid #000", margin: "-1.5px" }}
                      >
                        <span className="oswald text-xs font-bold uppercase tracking-wide block">{b.label}</span>
                        <span className="text-xs text-gray-400 block mt-0.5">{b.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Payment Preference</label>
                    <select className="select-brutal" value={form.payment} onChange={(e) => set("payment", e.target.value)}>
                      <option>50% upfront / 50% on delivery</option>
                      <option>100% upfront</option>
                      <option>Milestone-based</option>
                      <option>Net 30</option>
                    </select>
                  </div>
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Currency</label>
                    <select className="select-brutal" value={form.currency} onChange={(e) => set("currency", e.target.value)}>
                      <option>USD — US Dollar</option>
                      <option>EUR — Euro</option>
                      <option>GBP — British Pound</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Additional Budget Notes</label>
                  <textarea className="input-brutal" rows={3} placeholder="Rush fees, licensing add-ons, special requirements..." value={form.budgetNotes} onChange={(e) => set("budgetNotes", e.target.value)} />
                </div>
              </div>
            )}

            {/* ── STEP 3: REVIEW ── */}
            {current === 3 && (
              <div>
                {/* Summary box */}
                <div className="mb-5" style={{ border: "3px solid #000" }}>
                  <div className="flex items-center justify-between px-4 py-2 border-b-4 border-black bg-gray-50">
                    <span className="oswald text-xs font-bold uppercase tracking-widest">Summary</span>
                    <span className="bg-yellow-300 border-2 border-black px-2 py-0.5 oswald text-xs font-bold uppercase tracking-wide">Draft</span>
                  </div>
                  {[
                    ["Project Title", form.title || "—"],
                    ["Project Type", form.projectType],
                    ["Illustrations", form.illustrationCount],
                    ["Budget", form.budget],
                    ["Usage", form.usageRights.join(", ") || "—"],
                    ["Payment", form.payment],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-start justify-between px-4 py-2 border-b border-gray-200 last:border-b-0">
                      <span className="oswald text-xs text-gray-400 uppercase tracking-wide">{label}</span>
                      <span className="text-xs font-medium text-right max-w-xs">{val}</span>
                    </div>
                  ))}
                </div>
                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Your Name *</label>
                    <input className="input-brutal" type="text" placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} />
                  </div>
                  <div>
                    <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Phone</label>
                    <input className="input-brutal" type="tel" placeholder="+1 (212) 555-0147" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="oswald text-xs font-bold uppercase tracking-widest block mb-1">Email *</label>
                  <input className="input-brutal" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <label className="flex items-start gap-2 text-xs leading-relaxed mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 accent-yellow-300"
                    checked={form.agreed}
                    onChange={(e) => set("agreed", e.target.checked)}
                  />
                  <span>I agree to the <a href="#" className="font-bold underline">Terms &amp; Conditions</a> and confirm all information is accurate.</span>
                </label>
                <div className="bg-black text-white p-3 text-xs leading-relaxed">
                  Response within 24h. You'll receive an email confirmation with your inquiry reference number.
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t-4 border-black flex-wrap gap-3">
              <button
                className="btn-brutal"
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
              >
                ← Back
              </button>
              <div className="flex gap-2 flex-wrap">
                <button className="btn-brutal" onClick={saveDraft}>
                  💾 Save Draft
                </button>
                {current < 3 ? (
                  <button className="btn-brutal btn-yellow" onClick={() => setCurrent((c) => c + 1)}>
                    Next →
                  </button>
                ) : (
                  <button
                    className="btn-brutal btn-red"
                    onClick={() => setSubmitted(true)}
                    disabled={!form.agreed || !form.name || !form.email}
                  >
                    Submit →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel-mobile" style={{ background: "#1a1a1a", color: "#fff", padding: "1.25rem" }}>
          <p className="oswald text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#F9FF00" }}>
            Typical Timeline
          </p>
          {[
            { time: "24h", bg: "#F9FF00", color: "#1a1a1a", title: "Initial Response", sub: "Art director reviews your brief" },
            { time: "48h", bg: "#FF0004", color: "#fff", title: "Artist Matching", sub: "Matched with ideal illustrator" },
            { time: "7d", bg: "#fff", color: "#1a1a1a", title: "First Concepts", sub: "Initial sketches presented" },
          ].map((item) => (
            <div key={item.time} className="flex gap-2 items-start mb-4">
              <div className="w-8 h-8 flex items-center justify-center oswald text-xs font-bold flex-shrink-0" style={{ background: item.bg, color: item.color }}>
                {item.time}
              </div>
              <div>
                <div className="text-xs font-medium leading-tight">{item.title}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{item.sub}</div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1rem", marginTop: "0.5rem" }}>
            <p className="oswald text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#F9FF00" }}>Contact</p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              studio@editorialcommission.desk<br />
              +1 (212) 555-0147<br /><br />
              48 W 25th St, Floor 9<br />
              New York, NY 10010
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1rem", marginTop: "1rem" }}>
            <p className="oswald text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#F9FF00" }}>
              Commissions Open
            </p>
            <p className="oswald text-2xl font-black" style={{ color: "#F9FF00", lineHeight: 1 }}>Q2 2026</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Slots filling fast</p>
          </div>
        </div>

      </div>
    </div>
  );
}