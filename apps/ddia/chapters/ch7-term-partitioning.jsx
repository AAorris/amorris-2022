import md5 from "js-md5";
import { useEffect, useState } from "react";

const awards =
  `Marie Curie "in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel"
Marie Curie "in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium by the isolation of radium and the study of the nature and compounds of this remarkable element"
Maria Goeppert Mayer "for their discoveries concerning nuclear shell structure"
Irène Joliot-Curie "in recognition of their synthesis of new radioactive elements"
Dorothy Crowfoot Hodgkin "for her determinations by X-ray techniques of the structures of important biochemical substances"
Gerty Cori "for their discovery of the course of the catalytic conversion of glycogen"
Rosalyn Yalow "for the development of radioimmunoassays of peptide hormones"
Barbara McClintock "for her discovery of mobile genetic elements"
Rita Levi-Montalcini "for their discoveries of growth factors"
Gertrude B. Elion "for their discoveries of important principles for drug treatment"
Christiane Nüsslein-Volhard "for their discoveries concerning the genetic control of early embryonic development"
Bertha von Suttner "for her audacity to oppose the horrors of war"
Jane Addams "for their assiduous effort to revive the ideal of peace and to rekindle the spirit of peace in their own nation and in the whole of mankind"
Emily Greene Balch "for her lifelong work for the cause of peace"
Betty Williams "for the courageous efforts in founding a movement to put an end to the violent conflict in Northern Ireland"
Mairead Corrigan "for the courageous efforts in founding a movement to put an end to the violent conflict in Northern Ireland"
Anjezë Gonxhe Bojaxhiu "for her work for bringing help to suffering humanity"
Alva Myrdal "for their work for disarmament and nuclear and weapon-free zones"
Aung San Suu Kyi "for her non-violent struggle for democracy and human rights"
Rigoberta Menchú Tum "for her struggle for social justice and ethno-cultural reconciliation based on respect for the rights of indigenous peoples"
Jody Williams "for their work for the banning and clearing of anti-personnel mines"
Selma Lagerlöf "in appreciation of the lofty idealism vivid imagination and spiritual perception that characterize her writings"
Grazia Deledda "for her idealistically inspired writings which with plastic clarity picture the life on her native island and with depth and sympathy deal with human problems in general"
Sigrid Undset "principally for her powerful descriptions of Northern life during the Middle Ages"
Pearl Buck "for her rich and truly epic descriptions of peasant life in China and for her biographical masterpieces"
Gabriela Mistral "for her lyric poetry which inspired by powerful emotions has made her name a symbol of the idealistic aspirations of the entire Latin American world"
Nelly Sachs "for her outstanding lyrical and dramatic writing which interprets Israel's destiny with touching strength "
Nadine Gordimer "who through her magnificent epic writing has - in the words of Alfred Nobel - been of very great benefit to humanity"
Toni Morrison "who in novels characterized by visionary force and poetic import gives life to an essential aspect of American reality"
Wislawa Szymborska "for poetry that with ironic precision allows the historical and biological context to come to light in fragments of human reality"
Shirin Ebadi "for her efforts for democracy and human rights. She has focused especially on the struggle for the rights of women and children"
Linda B. Buck "for their discoveries of odorant receptors and the organization of the olfactory system"
Elfriede Jelinek "for her musical flow of voices and counter-voices in novels and plays that with extraordinary linguistic zeal reveal the absurdity of society's clich&eacute;s and their subjugating power"
Wangari Maathai "for her contribution to sustainable development democracy and peace"
Doris Lessing "that epicist of the female experience who with scepticism fire and visionary power has subjected a divided civilisation to scrutiny"
Françoise Barré-Sinoussi "for their discovery of human immunodeficiency virus"
Elizabeth H. Blackburn "for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase"
Carol W. Greider "for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase"
Ada E. Yonath "for studies of the structure and function of the ribosome"
Herta Müller "who with the concentration of poetry and the frankness of prose depicts the landscape of the dispossessed"
Elinor Ostrom "for her analysis of economic governance especially the commons"
Ellen Johnson Sirleaf "for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work"
Leymah Gbowee "for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work"
Tawakkol Karman "for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work"
Alice Munro "master of the contemporary short story"
May-Britt Moser "for their discoveries of cells that constitute a positioning system in the brain"
Malala Yousafzai "for their struggle against the suppression of children and young people and for the right of all children to education"
Youyou Tu "for her discoveries concerning a novel therapy against Malaria"
Svetlana Alexievich "for her polyphonic writings a monument to suffering and courage in our time"
Donna Strickland "for their method of generating high-intensity ultra-short optical pulses"
Frances H. Arnold "for the directed evolution of enzymes"
Nadia Murad "for their efforts to end the use of sexual violence as a weapon of war and armed conflict"
Olga Tokarczuk "for a narrative imagination that with encyclopedic passion represents the crossing of boundaries as a form of life"
Esther Duflo "for their experimental approach to alleviating global poverty"
Andrea Ghez "for the discovery of a supermassive compact object at the centre of our galaxy"
Emmanuelle Charpentier "for the development of a method for genome editing"
Jennifer A. Doudna "for the development of a method for genome editing"
Louise Glück "for her unmistakable poetic voice that with austere beauty makes individual existence universal"
Maria Ressa "for their efforts to safeguard freedom of expression which  is a precondition for democracy and lasting peace"`.split(
    /\n/
  );

const data = [
  ...Array(10)
    .fill()
    .map((_, n) => ({
      uid: md5(`a${n}`).slice(0, 5),
      user: "alice",
      day: `2022_08_${n.toString().padStart(2, "0")}`,
      uri: `p/a/2022_08_${n.toString().padStart(2, "0")}`,
      title: awards[parseInt(md5(`a${n}`).slice(0, 5), 16) % awards.length],
    })),
  ...Array(10)
    .fill()
    .map((_, n) => ({
      uid: md5(`b${n}`).slice(0, 5),
      user: "bob14",
      day: `2022_08_${n.toString().padStart(2, "0")}`,
      uri: `p/b/2022_08_${n.toString().padStart(2, "0")}`,
      title: awards[parseInt(md5(`b${n}`).slice(0, 5), 16) % awards.length],
    })),
  ...Array(5)
    .fill()
    .map((_, n) => ({
      uid: md5(`c${n}`).slice(0, 5),
      user: "caroline",
      day: `2022_08_${n.toString().padStart(2, "0")}`,
      uri: `p/c/2022_08_${n.toString().padStart(2, "0")}`,
      title: awards[parseInt(md5(`c${n}`).slice(0, 5), 16) % awards.length],
    })),
  ...Array(5)
    .fill()
    .map((_, n) => ({
      uid: md5(`c${n}`).slice(0, 5),
      user: "caroline14",
      day: `2022_08_${n.toString().padStart(2, "0")}`,
      uri: `p/c/2022_08_${n.toString().padStart(2, "0")}`,
      title: awards[parseInt(md5(`c${n}`).slice(0, 5), 16) % awards.length],
    })),
];

export const TermPartitioning = () => {
  const [partitions, setPartitions] = useState(1);
  const [hashing, setHashing] = useState("uid");
  const [sorting, setSorting] = useState("uid");
  const [partitionedData, setPartitionedData] = useState(null);
  useEffect(() => {
    const result = {};
    for (const item of data) {
      const s = `0x` + md5(item[hashing]);
      const n = BigInt(s);
      const partition = n % BigInt(partitions);
      // const partition = Math.round(Math.random() * 3);
      console.log(partition, item);
      result[partition] = [...(result[partition] || []), item].sort((a, b) =>
        a[sorting].localeCompare(b[sorting])
      );
    }
    setPartitionedData(result);
  }, [partitions, hashing, sorting]);
  return (
    <div>
      <details>
        <summary>(Raw Data)</summary>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data).split("},").join("},\n ")}
        </pre>
      </details>
      <br />
      <div>
        <label>Partitions</label>
        <br />
        {[1, 2, 3].map((n) => (
          <span key={n} style={{ marginRight: 10 }}>
            <input
              id={`p-${n}`}
              name="partitions"
              type="radio"
              checked={partitions === n}
              onChange={(e) => setPartitions(n)}
            />
            <label htmlFor={`p-${n}`}>Partition({n})</label>
          </span>
        ))}
        <br />
        <br />
        <label>Hashing</label>
        <br />
        {["uid", "title", "user"].map((x) => (
          <span key={x} style={{ marginRight: 10 }}>
            <input
              id={`h-${x}`}
              name="hashing"
              type="radio"
              checked={hashing === x}
              onChange={(e) => setHashing(x)}
            />
            <label htmlFor={`h-${x}`}>Hash({x})</label>
          </span>
        ))}
        <br />
        <br />
        <label>Sorting</label>
        <br />
        {["uid", "title", "day", "uri"].map((x) => (
          <span key={x} style={{ marginRight: 10 }}>
            <input
              id={`s-${x}`}
              name="sorting"
              type="radio"
              checked={sorting === x}
              onChange={(e) => setSorting(x)}
            />
            <label htmlFor={`s-${x}`}>Sort({x})</label>
          </span>
        ))}

        <ul>
          {Array(partitions)
            .fill()
            .map((_, i) => (
              <li key={`${i}`}>
                <span>Partition {i + 1}</span>
                <br />
                <pre>
                  {
                    partitionedData?.[i] &&
                      partitionedData[i].map((item) => (
                        <div>
                          <em>
                            {item[hashing].slice(0, 24)} — s(
                            {item[sorting].slice(0, 24)})
                          </em>
                          : By {item.user} on {item.day}
                          {", "}
                          {item.title.slice(
                            0,
                            Math.min(item.title.length - 16, 32)
                          )}
                          ...{item.title.slice(-16)}
                        </div>
                      ))
                    // JSON.stringify(partitionedData?.[i])
                    //   .split("},")
                    //   .join("},\n ")}
                  }
                </pre>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
