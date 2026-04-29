import { ArrowUpRight } from "lucide-react";
import styles from "../../routes/overview-page.module.css";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: any;
  gradient: string;
  trend?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient,
  trend,
}: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.backgroundPattern} ${styles[gradient]}`}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={`${styles.iconWrapper} ${styles[gradient]}`}>
            <Icon style={{ width: 24, height: 24, color: "white" }} />
          </div>
          {trend && (
            <div className={styles.trendBadge}>
              <ArrowUpRight style={{ width: 12, height: 12 }} />
              <span>{trend}</span>
            </div>
          )}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.decorativeCorner}></div>
    </div>
  );
}
