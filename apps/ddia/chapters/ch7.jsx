import Image from "next/image";
import slides from "./slide.module.css";
import { TermPartitioning } from "./ch7-term-partitioning";

function Slides() {
  return (
    <>
      <section className={slides.slide}>
        <div>
          <h1>Partitioning</h1>
          <p>Chapter 7</p>
        </div>
      </section>
      <section className={slides.slide}>
        <div>
          <h1>What are they</h1>

          <p>
            <em>Partitions</em> spread out...
          </p>

          <ul>
            <li>
              The <em>data</em> and <em>maximum storage</em>
            </li>
            <li>
              The <em>load</em> and <em>maximum throughput</em>
            </li>
          </ul>

          <span>
            By <em>a partition key.</em>
          </span>

          <p>
            <br />
            <i>Like spreading stuff into many cupboards...</i>
            <br />
            <em>Putting in and finding later can become harder</em>
            <br />
          </p>
        </div>
      </section>

      <section className={slides.slide}>
        <div>
          <code>
            <pre>
              {`
users/108f1ad:
  profile: {...}
  posts/1: {...}
  posts/2: {...}
  
users/1092df:
  profile: {...}
  posts/1: {...}
  posts/2: {...}
          `.trim()}
            </pre>
          </code>

          <p>
            <em>Term partitioning</em> for easier reads using a GSI{" "}
            <em>co-locates data </em>
          </p>

          <p>
            <em>Composite keys</em> that are sortable <em>pre-orders data </em>
          </p>
        </div>
      </section>
      <section className={`${slides.slide} ${slides.bigSlide}`}>
        <h2>Experiment: Partition some data</h2>
        <TermPartitioning />
      </section>
      <section className={slides.slide}>
        <div>
          <h2>Rebalancing: Fixed partitions</h2>
          <p>
            Create 1000 partitions even if you only have 10 nodes. Then have new
            nodes "steal" or return partitions when they join or leave
          </p>
        </div>
      </section>
      <section className={slides.slide}>
        <div>
          <h2>Rebalancing: Dynamic</h2>
          <p>
            As the size grows past a threshold, a partition gets split in half
            (or as it shrinks, is joined together with others). One node per
            partition, but there can be many partitions per node.
          </p>
        </div>
      </section>
      <section className={slides.slide}>
        <div>
          <h2>Rebalancing: Proportional</h2>
          <p>
            Both of the above have partitions not proportional to the number of
            nodes. Proportional uses <i>"partitions per node"</i>
          </p>
          <p>
            New nodes randomly choose a fixed number of existing partitions to
            split, then takes half of each. With large partition counts, this
            random process ends up reasonably fair. Must partition on hashes.
          </p>
        </div>
      </section>
      <section className={slides.slide}>
        <div>
          <h2>Is rebalancing invisible to us?</h2>
          <p>
            In other words, should we ever care to manually observe/manage
            rebalancing?
          </p>
          <blockquote>
            Rebalancing is an expensive operation, because it requires rerouting
            requests and moving a large amount of data from one node to another.
            If it is not done carefully, this process can overload the network
            or the nodes and harm the performance of other requests while the
            rebalancing is in progress.
          </blockquote>
        </div>
      </section>
      <section className={`${slides.slide} ${slides.bigSlide}`}>
        <div style={{ margin: "auto", width: "max-content" }}>
          <h2>Request Routing</h2>
          <div>
            <Image
              src={"https://cdn.zappy.app/f32e6ed5de327f0e3e42dba4fd16b134.png"}
              width={1009}
              height={498}
            />
          </div>
          <div>
            <Image
              src={"https://cdn.zappy.app/dc2ddaebc128cf25c7c161f46d361ff3.png"}
              width={937}
              height={472}
            />
          </div>
        </div>
      </section>
      <section className={slides.slide}>
        <div>
          <h2>Key Terms</h2>
          <h3>Key range partitioning</h3>
          <p>
            <em>Keys are sorted</em>, a partition owns all the{" "}
            <em>keys in some range.</em> Sorting makes range queries efficient,
            but risks hot spots. Typically uses dynamic rebalancing
          </p>
          <h3>Hash partitioning</h3>
          <p>
            <em>A hash function is applied to each key</em>, a partition owns a{" "}
            <em>range of hashes</em>, cannot order the hash keys. Commonly used
            with a fixed number of partitions
          </p>
          <h3>Secondary indices</h3>
          <p>
            <em>local or global</em>
            <br />
            local is <i>document partitioned</i> (easier to write)
            <br />
            and global is <i>term partitioned.</i> (easier to read)
            <br />
            The seconday indices organize pointers to data that ends up spread
            out
          </p>
        </div>
      </section>
    </>
  );
}

export default Slides;
