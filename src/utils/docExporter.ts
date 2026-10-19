import { BrandData } from '../data/brandData';
import { SocialPost } from '../data/postsData';

/**
 * Generates and downloads a rich, beautifully formatted Microsoft Word (.doc) deliverable
 * containing the entire Brand Research, Strategy, 30-Day Calendar Table, and individual
 * Post-by-Post Briefs.
 */
export function generateWordDocument(brand: BrandData, posts: SocialPost[]): void {
  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>${brand.name} - 30-Day Social Media Content Plan</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 8.5in 11.0in;
    margin: 1.0in 1.0in 1.0in 1.0in;
    mso-header-margin: 0.5in;
    mso-footer-margin: 0.5in;
  }
  body {
    font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #222425;
  }
  h1 {
    font-family: 'Georgia', 'Palatino', serif;
    font-size: 24pt;
    font-weight: bold;
    color: #2A3D30;
    margin-top: 24pt;
    margin-bottom: 8pt;
    border-bottom: 2pt solid #2A3D30;
    padding-bottom: 4pt;
  }
  h2 {
    font-family: 'Georgia', 'Palatino', serif;
    font-size: 16pt;
    font-weight: bold;
    color: #2A3D30;
    margin-top: 18pt;
    margin-bottom: 6pt;
    border-bottom: 1pt solid #D9CEBA;
    padding-bottom: 2pt;
  }
  h3 {
    font-family: 'Calibri', 'Segoe UI', sans-serif;
    font-size: 12pt;
    font-weight: bold;
    color: #8C4A2F;
    margin-top: 12pt;
    margin-bottom: 4pt;
  }
  p {
    margin-top: 0;
    margin-bottom: 6pt;
  }
  .cover-box {
    background-color: #F5F2EB;
    border: 1pt solid #D9CEBA;
    padding: 24pt;
    margin-bottom: 24pt;
  }
  .tagline {
    font-size: 13pt;
    font-style: italic;
    color: #5C6B5E;
    margin-bottom: 12pt;
  }
  .meta-grid {
    margin-top: 12pt;
    padding-top: 12pt;
    border-top: 1pt solid #D9CEBA;
    font-size: 10pt;
    color: #555555;
  }
  table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10pt;
    margin-bottom: 16pt;
    font-size: 9.5pt;
  }
  table.data-table th {
    background-color: #2A3D30;
    color: #FFFFFF;
    text-align: left;
    padding: 6pt 8pt;
    font-weight: bold;
    border: 1pt solid #2A3D30;
  }
  table.data-table td {
    padding: 6pt 8pt;
    border: 1pt solid #E2DFD7;
    vertical-align: top;
  }
  table.data-table tr:nth-child(even) {
    background-color: #FAF8F5;
  }
  .post-card {
    background-color: #FFFFFF;
    border: 1pt solid #E2DFD7;
    padding: 14pt;
    margin-bottom: 16pt;
    page-break-inside: avoid;
  }
  .post-header {
    background-color: #F5F2EB;
    padding: 6pt 10pt;
    margin: -14pt -14pt 10pt -14pt;
    border-bottom: 1pt solid #E2DFD7;
  }
  .caption-box {
    background-color: #FBF9F6;
    border-left: 3pt solid #2A3D30;
    padding: 8pt 10pt;
    margin-top: 6pt;
    margin-bottom: 8pt;
    font-style: normal;
    white-space: pre-line;
  }
  .badge {
    display: inline-block;
    padding: 2pt 6pt;
    font-size: 8.5pt;
    font-weight: bold;
    background-color: #EFECE6;
    color: #2A3D30;
    margin-right: 4pt;
  }
  .page-break {
    page-break-before: always;
  }
  .highlight-quote {
    font-style: italic;
    color: #2A3D30;
    font-size: 11pt;
    background: #F5F2EB;
    padding: 10pt;
    margin: 10pt 0;
  }
</style>
</head>
<body>

  <!-- COVER / HEADER -->
  <div class="cover-box">
    <p style="font-size: 10pt; text-transform: uppercase; letter-spacing: 1.5pt; color: #8C4A2F; margin-bottom: 4pt;">Social Media Master Deliverable</p>
    <h1 style="border: none; margin-top: 0; padding: 0; color: #2A3D30;">${brand.name}</h1>
    <p class="tagline">${brand.tagline}</p>
    <p><strong>A Month of Intentional Content: Complete 30-Day Content Strategy & Publishing Plan</strong></p>
    <p>This document presents a strategic month-long social media plan designed for ${brand.name}, a fictional sustainable fashion label committed to closed-loop natural circularity, radical supply chain transparency, and timeless slow-batch garments.</p>
    
    <div class="meta-grid">
      <p><strong>Industry:</strong> Sustainable Luxury & Circular Fashion &nbsp;|&nbsp; <strong>Atelier Locations:</strong> ${brand.locations} &nbsp;|&nbsp; <strong>Founded:</strong> ${brand.founded}</p>
      <p><strong>Deliverable Scope:</strong> 31 Strategic Post Briefs, Platform Distribution Architecture, Research Dossier, Creative Directives</p>
      <p><strong>Target Month:</strong> November 2026 (Autumn/Winter Intentional Transition & Anti-Overconsumption Campaign)</p>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- SECTION 1: BRAND RESEARCH & FOUNDATION -->
  <h2>1. Brand Research & Strategic Foundation</h2>
  <p>To craft original and high-relevance content, the strategy is anchored in rigorous brand foundation research rather than superficial eco-buzzwords.</p>

  <h3>1.1 Mission & Core Philosophy</h3>
  <p>${brand.mission}</p>
  <div class="highlight-quote">
    "${brand.manifesto}"
  </div>

  <h3>1.2 The Five Non-Negotiable Brand Pillars</h3>
  <ul>
    ${brand.values.map(v => `<li><strong>${v.title}:</strong> ${v.description}</li>`).join('')}
  </ul>

  <h3>1.3 Third-Party Certifications</h3>
  <p>Every claim made across our social channels is backed by verifiable third-party certification frameworks to ensure zero greenwashing risk:</p>
  <ul>
    ${brand.certifications.map(c => `<li>${c}</li>`).join('')}
  </ul>

  <h3>1.4 Target Audience Personas</h3>
  <p>Our monthly content directly addresses three distinct customer psychographics who are weary of fast fashion:</p>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 20%;">Persona</th>
        <th style="width: 25%;">Profile & Age</th>
        <th style="width: 25%;">Core Pain Points</th>
        <th style="width: 30%;">Content & Purchasing Drivers</th>
      </tr>
    </thead>
    <tbody>
      ${brand.personas.map(p => `
        <tr>
          <td><strong>${p.name}</strong><br><span style="color: #666;">${p.role}</span></td>
          <td>Age ${p.age}<br>${p.lifestyle}</td>
          <td>${p.painPoints.join('; ')}</td>
          <td><strong>Drivers:</strong> ${p.purchasingDrivers.join('; ')}<br><strong>Channels:</strong> ${p.preferredChannels.join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <h3>1.5 Voice & Tone Guidelines</h3>
  <p>Sustainable fashion communication frequently suffers from either preachy moralizing or corporate greenwashing. Our guidelines ensure an honest, grounded presence:</p>
  <ul>
    ${brand.voiceAndTone.map(vt => `
      <li>
        <strong>${vt.attribute}:</strong> ${vt.explanation}<br>
        <span style="color: #2A3D30;"><strong>Do:</strong> ${vt.doText}</span><br>
        <span style="color: #8C4A2F;"><strong>Avoid:</strong> ${vt.dontText}</span>
      </li>
    `).join('')}
  </ul>

  <div class="page-break"></div>

  <!-- SECTION 2: CONTENT PILLARS & PLATFORM ARCHITECTURE -->
  <h2>2. Content Pillars & Multi-Channel Distribution</h2>
  <p>The 30-day content calendar is balanced across five thematic pillars to maintain variety, authority, and high engagement across the marketing funnel.</p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 25%;">Content Pillar</th>
        <th style="width: 15%;">Share</th>
        <th style="width: 30%;">Strategic Rationale</th>
        <th style="width: 30%;">Core Thematic Focus</th>
      </tr>
    </thead>
    <tbody>
      ${brand.pillars.map(pillar => `
        <tr>
          <td><strong>${pillar.name}</strong><br><em>${pillar.tagline}</em></td>
          <td><strong>${pillar.targetShare}%</strong> of monthly mix</td>
          <td>${pillar.description}</td>
          <td>${pillar.coreThemes.join(' &bull; ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <h3>Channel Distribution Strategy</h3>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 15%;">Channel</th>
        <th style="width: 20%;">Weekly Cadence</th>
        <th style="width: 35%;">Strategic Purpose</th>
        <th style="width: 30%;">Primary Formats</th>
      </tr>
    </thead>
    <tbody>
      ${brand.channels.map(ch => `
        <tr>
          <td><strong>${ch.platform}</strong></td>
          <td>${ch.weeklyCadence}</td>
          <td>${ch.primaryRole}</td>
          <td>${ch.formats.join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="page-break"></div>

  <!-- SECTION 3: 30-DAY MASTER CONTENT CALENDAR TABLE -->
  <h2>3. Master 30-Day Content Calendar Summary</h2>
  <p>The following master schedule outlines all 31 proposed dates, post titles, strategic pillars, distribution channels, formats, and primary performance targets for the month.</p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 6%;">Day</th>
        <th style="width: 12%;">Date & Day</th>
        <th style="width: 28%;">Post Title</th>
        <th style="width: 18%;">Pillar</th>
        <th style="width: 12%;">Channel / Format</th>
        <th style="width: 14%;">Primary KPI</th>
        <th style="width: 10%;">Status</th>
      </tr>
    </thead>
    <tbody>
      ${posts.map(post => `
        <tr>
          <td style="text-align: center; font-weight: bold;">${post.day}</td>
          <td><strong>${post.proposedDate}</strong><br><span style="font-size: 8.5pt; color: #666;">${post.weekday}</span></td>
          <td><strong>${post.title}</strong><br><span style="font-size: 8.5pt; color: #555;">${post.briefDescription.substring(0, 75)}...</span></td>
          <td>${post.pillarName}</td>
          <td>${post.channel}<br><span style="font-size: 8pt; color: #666;">${post.format}</span></td>
          <td>${post.kpiGoal}</td>
          <td>${post.status}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="page-break"></div>

  <!-- SECTION 4: COMPLETE POST-BY-POST CREATIVE DOSSIERS -->
  <h2>4. Detailed Post-by-Post Creative Briefs</h2>
  <p>Below is the complete creative dossier for each of the 31 posts, including strategic rationale, opening hook, complete ready-to-publish caption, hashtag strategy, visual art direction, and call to action.</p>

  ${posts.map(post => `
    <div class="post-card">
      <div class="post-header">
        <span class="badge">DAY ${post.day}</span>
        <span class="badge">${post.proposedDate} &bull; ${post.weekday}</span>
        <span class="badge">${post.channel}</span>
        <span class="badge">${post.format}</span>
        <span class="badge">${post.timeSlot}</span>
      </div>
      
      <h3 style="margin-top: 6pt; color: #2A3D30; font-size: 13pt;">${post.title}</h3>
      <p style="font-size: 9.5pt; color: #666; margin-bottom: 8pt;">
        <strong>Pillar:</strong> ${post.pillarName} &nbsp;|&nbsp; 
        <strong>Primary KPI:</strong> ${post.kpiGoal} &nbsp;|&nbsp; 
        <strong>Status:</strong> ${post.status}
      </p>

      <p><strong>Strategic Rationale & Consumer Friction Addressed:</strong><br>${post.briefDescription}</p>
      
      <p><strong>Opening Hook:</strong><br><em>"${post.hook}"</em></p>

      <p><strong>Ready-to-Publish Caption Copy:</strong></p>
      <div class="caption-box">${post.fullCaption}</div>

      <p><strong>Targeted Hashtag Set:</strong><br><span style="color: #2A3D30; font-size: 9pt;">${post.hashtags.join(' ')}</span></p>

      <p><strong>Creative Art Direction & Photography Staging:</strong><br>${post.creativeDirection}</p>

      <p><strong>Call to Action (CTA):</strong> <strong>${post.callToAction}</strong></p>
    </div>
  `).join('')}

  <div class="page-break"></div>

  <!-- SECTION 5: MEASUREMENT & GOVERNANCE -->
  <h2>5. Measurement, Governance & Anti-Greenwashing Audit</h2>
  <h3>5.1 Performance Review Framework</h3>
  <p>Social media performance for ${brand.name} will be evaluated on high-intent qualitative and behavioral actions rather than vanity metrics:</p>
  <ul>
    <li><strong>Saves & Bookmarks:</strong> Reflects genuine utility (educational guides, repair tutorials, capsule styling formulas). Target: &gt; 8% save-to-reach ratio on educational carousels.</li>
    <li><strong>Shares & Amplification:</strong> Measures resonance of ethical stances (anti-Black Friday manifesto, living wage audit, microplastic breakdowns).</li>
    <li><strong>Qualified Web Traffic & Take-Back Submissions:</strong> Measures conversion to our lifetime repair concierge and pre-order drops.</li>
  </ul>

  <h3>5.2 The 5-Point Anti-Greenwashing Pre-Publishing Checklist</h3>
  <ol>
    <li>Is every claim of 'organic', 'recycled', or 'fair' substantiated by a verifiable certificate code (GOTS, Fair Wear, OEKO-TEX)?</li>
    <li>Does the caption avoid vague buzzwords like 'eco-friendly', 'green', or 'planet-saving' in favor of specific metrics (liters of water, fiber grams)?</li>
    <li>Are artisan wages and workshop locations accurately represented without romanticizing labor?</li>
    <li>Does the post clearly state the limitations and ongoing challenges of our current circular supply chain?</li>
    <li>Does the creative asset showcase authentic garments, natural lighting, and zero synthetic filters?</li>
  </ol>

  <p style="margin-top: 24pt; font-size: 9pt; color: #888; text-align: center; border-top: 1pt solid #D9CEBA; padding-top: 12pt;">
    Document generated for <strong>${brand.name}</strong> &bull; End-to-End Social Media Planning Deliverable &bull; All Rights Reserved.
  </p>

</body>
</html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword'
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${brand.name.replace(/\s+/g, '_')}_30_Day_Social_Media_Content_Plan.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Exports the raw data as JSON for archiving or system integrations.
 */
export function exportAsJSON(brand: BrandData, posts: SocialPost[]): void {
  const data = {
    brand,
    posts,
    exportedAt: new Date().toISOString(),
    version: "1.0"
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${brand.name.replace(/\s+/g, '_')}_Content_Plan.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Exports a spreadsheet-ready CSV of all 30+ posts.
 */
export function exportAsCSV(posts: SocialPost[]): void {
  const headers = ["Day", "Date", "Weekday", "Title", "Pillar", "Channel", "Format", "Time Slot", "Hook", "Description", "KPI Goal", "Status", "Hashtags"];
  const rows = posts.map(p => [
    p.day,
    `"${p.proposedDate}"`,
    `"${p.weekday}"`,
    `"${p.title.replace(/"/g, '""')}"`,
    `"${p.pillarName}"`,
    `"${p.channel}"`,
    `"${p.format}"`,
    `"${p.timeSlot}"`,
    `"${p.hook.replace(/"/g, '""')}"`,
    `"${p.briefDescription.replace(/"/g, '""')}"`,
    `"${p.kpiGoal}"`,
    `"${p.status}"`,
    `"${p.hashtags.join(' ')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `30_Day_Social_Media_Calendar.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
