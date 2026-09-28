import Badge from "../common/Badge";
function SeverityBadge({ severity }) { const variant = severity === "Critical" ? "danger" : severity === "Major" ? "warning" : severity === "Minor" ? "info" : "default"; return <Badge variant={variant} dot>{severity}</Badge>; }
export default SeverityBadge;
