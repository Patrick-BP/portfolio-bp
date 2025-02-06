import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MessageSquare, Briefcase, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Views",
    value: "1,234",
    icon: Eye,
    trend: "+12.5%",
  },
  {
    title: "Messages",
    value: "23",
    icon: MessageSquare,
    trend: "+4.3%",
  },
  {
    title: "Projects",
    value: "12",
    icon: Briefcase,
    trend: "+2",
  },
  {
    title: "Avg. Response",
    value: "2h",
    icon: Clock,
    trend: "-15min",
  },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity to display.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;