import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, ShieldAlert, Globe, Radar, ListTree } from "lucide-react";

export default function ThreatAnalysisDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🛡️ CyberDudeBivash's Threat Analysis Dashboard
      </h1>

      <Tabs defaultValue="overview" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid grid-cols-5 gap-2">
          <TabsTrigger value="overview">🌐 Overview</TabsTrigger>
          <TabsTrigger value="realtime">📊 Live Threat Feed</TabsTrigger>
          <TabsTrigger value="ioc">🔍 IOC Tracker</TabsTrigger>
          <TabsTrigger value="vuln">🛠️ Vulnerability Scan</TabsTrigger>
          <TabsTrigger value="ai">🤖 AI Threat Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">🌍 Global Threat Intelligence</h2>
              <p>Integrates feeds from MISP, AlienVault OTX, IBM X-Force, Cisco Talos, and Recorded Future.</p>
              <p>Track real-time APT movements, malware campaigns, and zero-day CVEs globally.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="realtime">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">📡 Live Threat Feed</h2>
              <p>Streaming threat alerts, malware hashes, and breach reports in real-time.</p>
              <Input placeholder="Search by hash, IP, domain..." />
              <Button className="mt-2">Search</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ioc">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">🔐 IOC Tracker</h2>
              <p>Collect and correlate Indicators of Compromise (IP, URL, hash, domains).</p>
              <p>Integrates with MISP and ThreatFox.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vuln">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">🚨 Vulnerability Monitor</h2>
              <p>Track latest CVEs with severity scores, exploits in wild, and patching guidance.</p>
              <p>Powered by CVE API, VulnDB, and NVD.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">🤖 AI-Based Threat Insights</h2>
              <p>Analyzes trends across MITRE ATT&CK techniques, threat actor TTPs, and log anomalies using AI.</p>
              <p>Inspired by tools like Anomali Lens and CrowdStrike Falcon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
