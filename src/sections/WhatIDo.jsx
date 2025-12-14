export default function WhatIDo() {
  return (
    <section id="what-i-do" className="scroll-mt-24 py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
          <p className="mt-4 text-muted text-lg">
            I focus on building and operating reliable network infrastructure
            with a security-first mindset.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Network Engineering</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Design and troubleshooting of IP networks including routing,
              switching, VLAN segmentation, and traffic flow analysis.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Network Security</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Firewall policy design, VPN connectivity, and traffic inspection
              with security treated as an architectural concern.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Linux & Automation</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Linux system administration and automation using Bash and Python
              to streamline operational workflows.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Forward Direction</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Progressing toward cybersecurity roles focused on network security
              and defensive infrastructure, leveraging modern tooling and
              AI-assisted workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
